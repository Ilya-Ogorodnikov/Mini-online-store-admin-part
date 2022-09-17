import { combineReducers } from "redux";
import { adminReducer } from "./adminReducer";
import { categoryReducer } from "./categoryReducer";
import { errorReducer } from "./errorReducer";
import { pickupPointsReducer } from "./pickupPointsReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  pickupPoints: pickupPointsReducer,
  errors: errorReducer,
  admin: adminReducer,
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
