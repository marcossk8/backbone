import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectSearch = (state: RootState) => state.search.data;

export const countSelector = createSelector(selectSearch, state => state);