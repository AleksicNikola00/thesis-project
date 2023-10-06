import { createSlice } from "@reduxjs/toolkit";
import localStorageUtil from "../utils/local-storage/local-storage.util";

const displayMode = localStorageUtil.getMode();

const initalUIState = {
  displayMode,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initalUIState,
  reducers: {
    /**
     * @param {{type: string, payload: 'light' | 'dark'}} action sets display mode to the one from payload
     */
    setDisplayMode(state, action) {
      const newDisplayMode = action.payload;
      localStorageUtil.setMode(action.payload);
      state.displayMode = newDisplayMode;
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
