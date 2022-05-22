import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectContacts = (state: RootState) => state.contacts.data;

export const countSelector = createSelector(selectContacts, state => state);