import {
  IPickupPointsAction,
  IPicupPointsState,
  PickupPointsActionTypes,
} from "../../models/pickupPoints";

const initialState: IPicupPointsState = {
  pickupPoints: [],
  loading: false,
};

export const pickupPointsReducer = (
  state = initialState,
  action: IPickupPointsAction
): IPicupPointsState => {
  switch (action.type) {
    case PickupPointsActionTypes.FETCH_PICKUP_POINTS:
      return { loading: true, pickupPoints: [] };
    case PickupPointsActionTypes.FETCH_PICKUP_POINTS_SUCCESS:
      return { loading: false, pickupPoints: action.payload };
    case PickupPointsActionTypes.ADD_PICKUP_POINTS:
      return {
        loading: false,
        pickupPoints: [...state.pickupPoints, action.payload],
      };
    case PickupPointsActionTypes.CHANGE_PICKUP_POINTS:
      return {
        loading: false,
        pickupPoints: [
          ...state.pickupPoints.map((item) => {
            const newItem = { ...item };
            if (newItem._id === action.payload._id) {
              newItem.title = action.payload.title;
              newItem.openHours = action.payload.openHours;
              newItem.isActive = action.payload.isActive;
              newItem.coordinates = action.payload.coordinates;
              newItem.address = action.payload.address;
            }
            return newItem;
          }),
        ],
      };
    case PickupPointsActionTypes.DEACTIVATE_PICKUP_POINTS:
      return {
        loading: false,
        pickupPoints: [
          ...state.pickupPoints.filter(
            (onePickupPoint) => onePickupPoint._id !== action.payload._id
          ),
        ],
      };
    default:
      return state;
  }
};
