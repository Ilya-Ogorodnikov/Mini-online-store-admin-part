import { IPickupPoints } from ".";

export enum PickupPointsActionTypes {
  FETCH_PICKUP_POINTS = "FETCH_PICKUP_POINTS",
  FETCH_PICKUP_POINTS_SUCCESS = "FETCH_PICKUP_POINTS_SUCCESS",
  ADD_PICKUP_POINTS = "ADD_PICKUP_POINTS",
  CHANGE_PICKUP_POINTS = "CHANGE_PICKUP_POINTS",
  DEACTIVATE_PICKUP_POINTS = "DEACTIVATE_PICKUP_POINTS",
}

export interface IPicupPointsState {
  pickupPoints: IPickupPoints[];
  loading: boolean;
}

interface IFetchPickupPointsAction {
  type: PickupPointsActionTypes.FETCH_PICKUP_POINTS;
}

interface IFetchPickupPointsSuccessAction {
  type: PickupPointsActionTypes.FETCH_PICKUP_POINTS_SUCCESS;
  payload: IPickupPoints[];
}

interface IAddPickupPoint {
  type: PickupPointsActionTypes.ADD_PICKUP_POINTS;
  payload: IPickupPoints;
}

interface IChangePickupPoint {
  type: PickupPointsActionTypes.CHANGE_PICKUP_POINTS;
  payload: IPickupPoints;
}

interface IDeactivatePickupPoint {
  type: PickupPointsActionTypes.DEACTIVATE_PICKUP_POINTS;
  payload: IPickupPoints;
}

export type IPickupPointsAction =
  | IFetchPickupPointsAction
  | IFetchPickupPointsSuccessAction
  | IAddPickupPoint
  | IChangePickupPoint
  | IDeactivatePickupPoint;
