import { configureStore } from "@reduxjs/toolkit";
import fontSlice from "./font-slicer";
const store = configureStore({
  reducer: {
    font: fontSlice.reducer,
  },
});

export default store;
export const fontActions = fontSlice.actions;
