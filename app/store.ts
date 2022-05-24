import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { alertsReducer } from "../features/alerts/reducer";
import { contactsReducer } from "../features/contacts";
import { searchReducer } from "../features/search";

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    contacts: contactsReducer,
    alerts: alertsReducer,
    search: searchReducer,
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
