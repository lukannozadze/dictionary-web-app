import { configureStore } from "@reduxjs/toolkit";
import fontSlice from "./font-slicer";
import modeSlice from "./mode-slicer";
import searchedWordSlice from "./searchedWord-slicer";
const store = configureStore({
  reducer: {
    font: fontSlice.reducer,
    searchedWord: searchedWordSlice.reducer,
    mode: modeSlice.reducer,
  },
});

export default store;
export const fontActions = fontSlice.actions;
export const searchedWordActions = searchedWordSlice.actions;
export const modeActions = modeSlice.actions;
