import { createSlice } from "@reduxjs/toolkit";

const searchedWordSlice = createSlice({
  name: "searchedWord",
  initialState: { searchedWord: "Keyboard" },
  reducers: {
    setWord(state, action) {
      const newWord = action.payload;
      let currentWord = state.searchedWord;
      currentWord = newWord;
      state.searchedWord = currentWord;
    },
  },
});

export default searchedWordSlice;
