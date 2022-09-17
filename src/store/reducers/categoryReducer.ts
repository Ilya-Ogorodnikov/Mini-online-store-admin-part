import {
  ICategoryState,
  CategoryActionTypes,
  ICategoriesAction,
} from "../../models/category";

const initialState: ICategoryState = {
  categories: [],
  loading: false,
};

export const categoryReducer = (
  state = initialState,
  action: ICategoriesAction
): ICategoryState => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES:
      return { loading: true, categories: [] };
    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return { loading: false, categories: action.payload };
    case CategoryActionTypes.ADD_CATEGORIES:
      return {
        loading: false,
        categories: [...state.categories, action.payload],
      };
    case CategoryActionTypes.CHANGE_CATEGORIES:
      return {
        loading: false,
        categories: [
          ...state.categories.map((item) => {
            const newItem = { ...item };
            if (newItem._id === action.payload._id) {
              newItem.title = action.payload.title;
            }
            return newItem;
          }),
        ],
      };
    case CategoryActionTypes.DEACTIVATE_CATEGORY:
      return {
        loading: false,
        categories: [
          ...state.categories.filter(
            (oneCategory) => oneCategory._id !== action.payload._id
          ),
        ],
      };
    default:
      return state;
  }
};
