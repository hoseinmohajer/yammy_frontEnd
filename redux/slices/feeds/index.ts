import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateInterface {
  q: string
};
const initialState: initialStateInterface = {
  q: ''
}
export const feedsListSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    autoComplete: (state, {payload}: PayloadAction<{q: string}>) => {
      // state.push("one");
    },
    search: state => {},
    list: state => {},
    listSimilarities: state => {},
  }
});

export const {
  autoComplete: autoCompleteActionCreator
} = feedsListSlice.actions;
