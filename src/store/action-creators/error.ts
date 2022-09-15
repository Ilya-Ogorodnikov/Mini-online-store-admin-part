import { Dispatch } from "redux";
import { ErrorActionTypes, IErrorAction } from "../../models/error";

export const clearError = () => (dispatch: Dispatch<IErrorAction>) => {
  dispatch({
    type: ErrorActionTypes.CLEAR_ERROR,
    payload: "",
  });
};
