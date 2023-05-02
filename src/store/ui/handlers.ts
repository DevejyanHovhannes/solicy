import { Handler } from "../types/store-types";
import {
  AddBoxActionType,
  DeleteBoxActionType,
  IUIState,
  SortBoxesActionType,
  UIActionTypes,
} from "./types";
import _ from "lodash";

const addBox: Handler<IUIState, AddBoxActionType> = (state, payload) => {
  const newBoxes = _.cloneDeep(state.boxes);
  newBoxes.push(Math.floor(Math.random() * 1000));
  localStorage.setItem("boxes", JSON.stringify(newBoxes));
  return { ...state, boxes: newBoxes };
};

const sortBoxes: Handler<IUIState, SortBoxesActionType> = (state, payload) => {
  const sortedBoxes = _.cloneDeep(state.boxes);
  sortedBoxes.sort((a, b) => {
    return a - b;
  });
  localStorage.setItem("boxes", JSON.stringify(sortedBoxes));
  return { ...state, boxes: sortedBoxes };
};

const getBoxes: Handler<IUIState, SortBoxesActionType> = (state, payload) => {
  const storage = localStorage.getItem("boxes");
  let oldBoxes: number[] = [];
  if (storage) oldBoxes = JSON.parse(storage);

  return { ...state, boxes: oldBoxes };
};

const deleteBox: Handler<IUIState, DeleteBoxActionType> = (
  state,
  { payload: { index } },
) => {
  const deletedBoxes = _.cloneDeep(state.boxes);
  deletedBoxes.splice(index, 1);
  localStorage.setItem("boxes", JSON.stringify(deletedBoxes));
  return { ...state, boxes: deletedBoxes };
};

export const uiHandlers = {
  [UIActionTypes.ADD_BOX]: addBox,
  [UIActionTypes.SORT_BOXES]: sortBoxes,
  [UIActionTypes.GET_BOXES]: getBoxes,
  [UIActionTypes.DELETE_BOX]: deleteBox,
};
