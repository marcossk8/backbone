import { createAction } from "@reduxjs/toolkit";

type Color = 'success' | 'info' | 'warning' | 'error';

interface AlertsState {
    open: boolean; 
    message: string; 
    type: Color;
}

export const showAlert = createAction<AlertsState>("alert/data");
