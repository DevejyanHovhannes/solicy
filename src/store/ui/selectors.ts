import { State } from "../types/store";

export const selectBoxes = (state: State) => state.ui.boxes;
