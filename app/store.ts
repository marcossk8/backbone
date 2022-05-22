import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { contactsReducer } from "../features/contacts";

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    contacts: contactsReducer
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
