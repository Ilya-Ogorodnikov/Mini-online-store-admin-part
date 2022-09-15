import axios from "axios";
import { Dispatch } from "redux";
import { loginAdmin } from "../../services/login-service";
import { AuthActionTypes, IAuthAction } from "../../models/admin";
import { ErrorActionTypes, IErrorAction } from "../../models/error";

const signIn =
  (email: string, password: string) =>
  async (dispatch: Dispatch<IAuthAction | IErrorAction>) => {
    try {
      dispatch({
        type: AuthActionTypes.FETCH_AUTH,
        payload: true,
      });
      const resp = await loginAdmin(email, password);
      localStorage.setItem("token", resp.data.accessToken);
      dispatch({
        type: AuthActionTypes.FETCH_AUTH_SUCCESS,
        payload: true,
      });

      /* В первом варианте, у нас в принципе в блок кэтч заходила абсолютно любая ошибка из-за эни, то есть там могла оказаться не только axios ошибка,
      а теперь мы точно знаем, что это ошибка аксиоса, что в response у этой ошибки имеется какая-то data,
      месседж в которой может быть любым, но при этом выводить пользователю мы будем исключительно строковый месседж */
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data) {
          const { message }: any = error.response.data;
          if (typeof message === "string") {
            dispatch({
              type: AuthActionTypes.FETCH_AUTH,
              payload: false,
            });
            dispatch({
              type: ErrorActionTypes.FETCH_AUTH_ERROR,
              payload: message,
            });
          }
        }
      }
    }
  };

const authAdmin =
  () => async (dispatch: Dispatch<IAuthAction | IErrorAction>) => {
    try {
      if (localStorage.getItem("token")) {
        dispatch({
          type: AuthActionTypes.FETCH_AUTH,
          payload: true,
        });
        const response = await axios.get("/users/refresh", {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        dispatch({
          type: AuthActionTypes.FETCH_AUTH_SUCCESS,
          payload: true,
        });
      }
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_AUTH_ERROR,
        payload: "Ошибка авторизации",
      });
    }
  };

const logOut = () => (dispatch: Dispatch<IAuthAction>) => {
  dispatch({
    type: AuthActionTypes.FETCH_AUTH,
    payload: true,
  });
  localStorage.removeItem("token");
  dispatch({
    type: AuthActionTypes.FETCH_AUTH_SUCCESS,
    payload: false,
  });
};

export { signIn, authAdmin, logOut };
