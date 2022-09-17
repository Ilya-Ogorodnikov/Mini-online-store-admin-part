export interface IErrorState {
  error: null | string;
  openSnack: boolean;
}

export enum ErrorActionTypes {
  FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
  FETCH_PICKUP_POINTS_ERROR = "FETCH_PICKUP_POINTS_ERROR",
  FETCH_AUTH_ERROR = "FETCH_AUTH_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
  GENERIC_ERROR = "GENERIC_ERROR",
}

interface ICategoryErrorAction {
  type: ErrorActionTypes.FETCH_CATEGORIES_ERROR;
  payload: string;
}

interface IProductsErrorAction {
  type: ErrorActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}

interface IPickupPointErrorAction {
  type: ErrorActionTypes.FETCH_PICKUP_POINTS_ERROR;
  payload: string;
}

interface IClearErrorAction {
  type: ErrorActionTypes.CLEAR_ERROR;
  payload: string;
}

interface IAuthErrorAction {
  type: ErrorActionTypes.FETCH_AUTH_ERROR;
  payload: string;
}

interface IGenericErrorAction {
  type: ErrorActionTypes.GENERIC_ERROR;
  payload: string;
}

export type IErrorAction =
  | ICategoryErrorAction
  | IPickupPointErrorAction
  | IClearErrorAction
  | IAuthErrorAction
  | IProductsErrorAction
  | IGenericErrorAction;
