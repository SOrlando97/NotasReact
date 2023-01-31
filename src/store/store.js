import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { notasSlice } from './notas';

export const store = configureStore({ 
    reducer: {

        auth: authSlice.reducer,
        notas: notasSlice.reducer,

    },
});