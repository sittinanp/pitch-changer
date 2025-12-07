import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User ,AuthState } from "../types";

const initialState: AuthState = {
    accessToken: null,
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state , action: PayloadAction<string>) => {
            state.accessToken = action.payload;
            state.isAuthenticated = true;
        },

        setUser: (state, action: PayloadAction< User | null >) => {
            state.user = action.payload;
        },

        loginSuccess: (state, action: PayloadAction<{ accessToken: string; user: User }>) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.accessToken = null;
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setAccessToken, setUser, loginSuccess ,logout } = authSlice.actions;

export default authSlice.reducer;