export interface IAuthState {
  isAuth: boolean;
  loading: boolean;
}

export enum AuthActionTypes {
  FETCH_AUTH = "FETCH_AUTH",
  FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS",
}

interface IFetchAuthAction {
  type: AuthActionTypes.FETCH_AUTH;
  payload: boolean;
}

interface IFetchAuthSuccessAction {
  type: AuthActionTypes.FETCH_AUTH_SUCCESS;
  payload: boolean;
}

export type IAuthAction = IFetchAuthAction | IFetchAuthSuccessAction;
