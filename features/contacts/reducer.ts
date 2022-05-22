import { createReducer } from "@reduxjs/toolkit";
import { contactData } from "./actions";
import { ContactsResult } from "../../interfaces";

type ContactsState = {
  data: ContactsResult[];
};

const initialState: ContactsState = {
    data: [],
};

export const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(contactData, (state, action) => {
      state.data = action.payload;
    });
});
