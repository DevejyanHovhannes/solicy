import { ActionType } from "../types/store-types";

interface IAddBox {}

interface ISortBoxes {}

interface IGetBoxes {}

interface IDeleteBox {
  index: number;
}

export interface IUIState {
  boxes: number[];
}

export enum UIActionTypes {
  ADD_BOX = "UI.ADD_BOX",
  SORT_BOXES = "UI.SORT_BOXES",
  GET_BOXES = "UI.GET_BOXES",
  DELETE_BOX = "UI.DELETE_BOX",
}

export type AddBoxActionType = ActionType<UIActionTypes.ADD_BOX, IAddBox>;

export type SortBoxesActionType = ActionType<
  UIActionTypes.SORT_BOXES,
  ISortBoxes
>;

export type GetBoxesActionType = ActionType<UIActionTypes.GET_BOXES, IGetBoxes>;

export type DeleteBoxActionType = ActionType<
  UIActionTypes.DELETE_BOX,
  IDeleteBox
>;
