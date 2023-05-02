import { ActionCreator } from "../types/store-types";
import {
  AddBoxActionType,
  DeleteBoxActionType,
  GetBoxesActionType,
  SortBoxesActionType,
  UIActionTypes,
} from "./types";

export const addBox: ActionCreator<AddBoxActionType> = (payload) => ({
  type: UIActionTypes.ADD_BOX,
  payload,
});

export const sortBoxes: ActionCreator<SortBoxesActionType> = (payload) => ({
  type: UIActionTypes.SORT_BOXES,
  payload,
});

export const getBoxes: ActionCreator<GetBoxesActionType> = (payload) => ({
  type: UIActionTypes.GET_BOXES,
  payload,
});

export const deleteBox: ActionCreator<DeleteBoxActionType> = (payload) => ({
  type: UIActionTypes.DELETE_BOX,
  payload,
});
