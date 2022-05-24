import { createReducer } from "@reduxjs/toolkit";
import { contactData } from "./actions";
import { ContactsListResponse } from "../../interfaces";

type ContactsState = {
  data: ContactsListResponse;
};

const initialState: ContactsState = {
    data: { results: [], totalPages: 0, page: 0 },
};

export const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(contactData, (state, action) => {
      state.data = action.payload;
    });
});
