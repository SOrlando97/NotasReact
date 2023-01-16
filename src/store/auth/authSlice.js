import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({

    name: 'auth',
    initialState:{
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action)=>{

        },
        logout: (state, payload)=>{

        },
        chekingCredentials: (state)=>{
            state.status = 'checking';
        },
    }

});

export const { login , logout , chekingCredentials } = authSlice.actions;