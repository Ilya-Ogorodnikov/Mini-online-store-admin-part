import { Dispatch } from "redux";
import { ProductsActionTypes, IProductsAction } from "../../models/product";
import { ErrorActionTypes, IErrorAction } from "../../models/error";
import {
  getAllProducts,
  addProduct,
  toggleDeleteProduct,
  updateProduct,
} from "../../services/products-service";

const fetchProducts = (isDelete: boolean = false) => async (dispatch: Dispatch<IProductsAction | IErrorAction>) => {
    try {
      dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });
      const response = await getAllProducts(isDelete);

      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Ошибка при загрузке всех товаров",
      });
    }
  };

const addOneProduct =
  (newProduct: FormData) => async (dispatch: Dispatch<IProductsAction | IErrorAction>) => {
    try {
      const response = await addProduct(newProduct);
      dispatch({
        type: ProductsActionTypes.ADD_PRODUCT,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Ошибка при добавлении товара",
      });
    }
  };

const toggleIsDeleteProduct =
  (id: string, isDelete: boolean) =>
  async (dispatch: Dispatch<IProductsAction | IErrorAction>) => {
    try {
      const response = await toggleDeleteProduct(id, isDelete);
      dispatch({
        type: ProductsActionTypes.DEACTIVATE_PRODUCT,
        payload: response.data,
      });      
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Ошибка при изменении товара",
      });
    }
  };

const updateOneProduct =
  (updatedProduct: FormData) => async (dispatch: Dispatch<IProductsAction | IErrorAction>) => {
    try {
      const response = await updateProduct(updatedProduct);
      dispatch({
        type: ProductsActionTypes.CHANGE_PRODUCT,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Ошибка при изменении товара",
      });
    }
  };

export {
  fetchProducts,
  addOneProduct,
  toggleIsDeleteProduct,
  updateOneProduct,
};
