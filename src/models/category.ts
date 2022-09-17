import { ICategories } from ".";

export enum CategoryActionTypes {
  FETCH_CATEGORIES = "FETCH_CATEGORIES",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  ADD_CATEGORIES = "ADD_CATEGORIES",
  CHANGE_CATEGORIES = "CHANGE_CATEGORIES",
  DEACTIVATE_CATEGORY = "DEACTIVATE_CATEGORY",
}

export interface ICategoryState {
  categories: ICategories[];
  loading: boolean;
}

interface IFetchCategoriesAction {
  type: CategoryActionTypes.FETCH_CATEGORIES;
}

interface IFetchCategoriesSuccessAction {
  type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS;
  payload: ICategories[];
}

interface IAddCategory {
  type: CategoryActionTypes.ADD_CATEGORIES;
  payload: ICategories;
}

interface IChangeCategory {
  type: CategoryActionTypes.CHANGE_CATEGORIES;
  payload: ICategories;
}

interface IDeactivateCategory {
  type: CategoryActionTypes.DEACTIVATE_CATEGORY;
  payload: ICategories;
}

export type ICategoriesAction =
  | IFetchCategoriesAction
  | IFetchCategoriesSuccessAction
  | IAddCategory
  | IChangeCategory
  | IDeactivateCategory;
