import {
  IProductState,
  ProductsActionTypes,
  IProductsAction,
} from "../../models/product";

const initialState: IProductState = {
  products: [],
  loading: false,
};

export const productReducer = (
  state = initialState,
  action: IProductsAction
): IProductState => {
  switch (action.type) {
    case ProductsActionTypes.FETCH_PRODUCTS:
      return { loading: true, products: [] };
    case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductsActionTypes.ADD_PRODUCT:
      return {
        loading: false,
        products: [...state.products, action.payload],
      };
    case ProductsActionTypes.CHANGE_PRODUCT:
      return {
        loading: false,
        products: [
          ...state.products.map(item => {
            const newItem = { ...item };
            if (newItem._id === action.payload._id) {
              newItem.title = action.payload.title;
              newItem.category = action.payload.category;
              newItem.createdAt = action.payload.createdAt;
              newItem.description = action.payload.description;
              newItem.features = action.payload.features;
              newItem.images = action.payload.images;
              newItem.isDelete = action.payload.isDelete;
              newItem.price = action.payload.price;
              newItem.quantity = action.payload.quantity;
              newItem.title = action.payload.title;
            }
            return newItem;
          }),
        ],
      };
    case ProductsActionTypes.DEACTIVATE_PRODUCT:
      return {
        loading: false,
        products: [
          ...state.products.filter(
            oneProduct => oneProduct._id !== action.payload._id
          ),
        ],
      };
    default:
      return state;
  }
};
