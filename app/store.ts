import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { alertsReducer } from "../features/alerts/reducer";
import { contactsReducer } from "../features/contacts";

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    contacts: contactsReducer,
    alerts: alertsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
