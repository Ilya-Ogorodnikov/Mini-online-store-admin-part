import * as CategoryActionCreators from "../action-creators/category";
import * as PickupPointsActionCreators from "../action-creators/pickupPoints";
import * as ErrorActionCreators from "../action-creators/error";
import * as AuthActionCreators from "../action-creators/login";
import * as ProductActionCreators from "../action-creators/product";

export default {
  ...CategoryActionCreators,
  ...PickupPointsActionCreators,
  ...ErrorActionCreators,
  ...AuthActionCreators,
  ...ProductActionCreators,
};