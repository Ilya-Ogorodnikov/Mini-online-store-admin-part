import { Dispatch } from "redux";
import { CategoryActionTypes, ICategoriesAction } from "../../models/category";
import { ErrorActionTypes, IErrorAction } from "../../models/error";
import {
  addCategory,
  changeReplaceCategory,
  changeTitleCategory,
  getAllCategories,
} from "../../services/categories-service";

const fetchCategories =
  (isDelete: string = "false") =>
  async (dispatch: Dispatch<ICategoriesAction | IErrorAction>) => {
    try {
      dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES });
      const resp = await getAllCategories(isDelete);
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: resp.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_CATEGORIES_ERROR,
        payload: "Ошибка при загрузке всех категорий",
      });
    }
  };

const addOneCategory =
  (title: string) =>
  async (dispatch: Dispatch<ICategoriesAction | IErrorAction>) => {
    try {
      const response = await addCategory(title);
      dispatch({
        type: CategoryActionTypes.ADD_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_CATEGORIES_ERROR,
        payload: "Ошибка при добавлении новой категории",
      });
    }
  };

const changeActiveCategory =
  (id: string, isDelete: boolean) =>
  async (dispatch: Dispatch<ICategoriesAction | IErrorAction>) => {
    try {
      const response = await changeReplaceCategory(id, isDelete);
      dispatch({
        type: CategoryActionTypes.DEACTIVATE_CATEGORY,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_CATEGORIES_ERROR,
        payload: "Ошибка при деактивации категории",
      });
    }
  };

const changeCategory =
  (id: string, title: string) =>
  async (dispatch: Dispatch<ICategoriesAction | IErrorAction>) => {
    try {
      const response = await changeTitleCategory(id, title);
      dispatch({
        type: CategoryActionTypes.CHANGE_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_CATEGORIES_ERROR,
        payload: "Ошибка при изменении категории",
      });
    }
  };

export {
  fetchCategories,
  addOneCategory,
  changeActiveCategory,
  changeCategory,
};
