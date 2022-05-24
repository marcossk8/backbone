import { createReducer } from "@reduxjs/toolkit";
import { searchData } from "./actions";

type SearchState = {
  data:string;
};

const initialState: SearchState = {
    data: "",
};

export const searchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(searchData, (state, action) => {
      state.data = action.payload;
    });
});
