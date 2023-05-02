import createReducer from "../createReducer";
import { uiHandlers } from "./handlers";
import { IUIState } from "./types";

export const StorageInitalState: IUIState = {
  boxes: [],
};

export default createReducer(StorageInitalState, uiHandlers);
