import { IProductFromDB } from ".";

export enum ProductsActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  ADD_PRODUCT = "ADD_PRODUCTS",
  CHANGE_PRODUCT = "CHANGE_PRODUCT",
  DEACTIVATE_PRODUCT = "DEACTIVATE_PRODUCT",
}

export interface IProductState {
  products: IProductFromDB[];
  loading: boolean;
}

interface IFetchProductsAction {
  type: ProductsActionTypes.FETCH_PRODUCTS;
}

interface IFetchProductsSuccessAction {
  type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS;
  payload: IProductFromDB[];
}

interface IAddProductAction {
  type: ProductsActionTypes.ADD_PRODUCT;
  payload: IProductFromDB;
}

interface IChangeProductAction {
  type: ProductsActionTypes.CHANGE_PRODUCT;
  payload: IProductFromDB;
}

interface IDeactivateProductAction {
  type: ProductsActionTypes.DEACTIVATE_PRODUCT;
  payload: IProductFromDB;
}

export type IProductsAction =
  | IFetchProductsAction
  | IFetchProductsSuccessAction
  | IAddProductAction
  | IChangeProductAction
  | IDeactivateProductAction;
