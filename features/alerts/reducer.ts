import { createReducer } from "@reduxjs/toolkit";
import { showAlert } from "./actions";

type Color = 'success' | 'info' | 'warning' | 'error';

type AlertsState = {
  data: { open: boolean; message: string; type: Color; };
};

const initialState: AlertsState = {
  data: { open: false, message: "", type: "success" },
};

export const alertsReducer = createReducer(initialState, (builder) => {
  builder.addCase(showAlert, (state, action) => {
    state.data = action.payload;
  });
});
