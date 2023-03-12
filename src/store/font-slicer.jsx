import { createSlice } from "@reduxjs/toolkit";

const fontSlice = createSlice({
  name: "font",
  initialState: { font: "font-inter" },
  reducers: {
    setFont(state, action) {
      let chosenFont = action.payload;
      let currentFont = state.font;
      if (chosenFont === "Sans Serif") {
        currentFont = "font-inter";
      } else if (chosenFont === "Serif") {
        currentFont = "font-lora";
      } else {
        currentFont = "font-inconsolata";
      }
      state.font = currentFont;
    },
  },
});

export default fontSlice;
