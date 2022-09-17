import { Dispatch } from "redux";
import {
  IPickupPointsAction,
  PickupPointsActionTypes,
} from "../../models/pickupPoints";
import { ErrorActionTypes, IErrorAction } from "../../models/error";
import {
  addPickupPoint,
  changePickupPoint,
  changeReplacePickupPoint,
  getAllPickupPoints,
} from "../../services/pickupPoints-service";

const fetchPickupPoints =
  (isActive: string = "true") =>
  async (dispatch: Dispatch<IPickupPointsAction | IErrorAction>) => {
    try {
      dispatch({ type: PickupPointsActionTypes.FETCH_PICKUP_POINTS });
      const resp = await getAllPickupPoints(isActive);
      dispatch({
        type: PickupPointsActionTypes.FETCH_PICKUP_POINTS_SUCCESS,
        payload: resp.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_PICKUP_POINTS_ERROR,
        payload: "Ошибка при загрузке всех пунктов выдачи",
      });
    }
  };

const addOnePickupPoint =
  (title: string, address: string, coordinates: string, openHours: string) =>
  async (dispatch: Dispatch<IPickupPointsAction | IErrorAction>) => {
    try {
      const response = await addPickupPoint(
        title,
        address,
        coordinates,
        openHours
      );
      dispatch({
        type: PickupPointsActionTypes.ADD_PICKUP_POINTS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_PICKUP_POINTS_ERROR,
        payload: "Ошибка при добавлении нового пункта выдачи",
      });
    }
  };

const changeActivePickupPoint =
  (id: string, isActive: boolean) =>
  async (dispatch: Dispatch<IPickupPointsAction | IErrorAction>) => {
    try {
      const response = await changeReplacePickupPoint(id, isActive);
      dispatch({
        type: PickupPointsActionTypes.DEACTIVATE_PICKUP_POINTS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_PICKUP_POINTS_ERROR,
        payload: "Ошибка при деактивации пункта выдачи",
      });
    }
  };

const editPickupPoint =
  (
    id: string,
    title: string,
    address: string,
    coordinates: string,
    openHours: string
  ) =>
  async (dispatch: Dispatch<IPickupPointsAction | IErrorAction>) => {
    try {
      const response = await changePickupPoint(
        id,
        title,
        address,
        coordinates,
        openHours
      );
      dispatch({
        type: PickupPointsActionTypes.CHANGE_PICKUP_POINTS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_PICKUP_POINTS_ERROR,
        payload: "Ошибка при изменении пункта",
      });
    }
  };

export {
  fetchPickupPoints,
  changeActivePickupPoint,
  addOnePickupPoint,
  editPickupPoint,
};
