import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectAlerts = (state: RootState) => state.alerts.data;

export const alertSelector = createSelector(selectAlerts, state => state);