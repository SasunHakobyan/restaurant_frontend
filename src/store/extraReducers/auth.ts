import {loginUser} from "../thunk/auth/loginUser";
import {registerUser} from "../thunk/auth/registerUser";
import {authMe} from "../thunk/auth/authMe";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {IAuthState} from "../reducers/authReducer";

export const auhtExtraReducers = (builder: ActionReducerMapBuilder<IAuthState>) => {
    builder
        .addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;

            state.user = {
                id: action.payload.user.id,
                username: action.payload.user.username,
                role: action.payload.user.role
            };

            state.showModal = false;

            localStorage.setItem('authToken', action.payload.accessToken);
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message[0] || null;
        })

    builder
        .addCase(registerUser.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.isLoading = false;
            state.error = null;

            state.user = {
                id: action.payload.user.id,
                username: action.payload.user.username,
                role: action.payload.user.role
            };

            state.showModal = false;

            localStorage.setItem('authToken', action.payload.accessToken);
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload?.message[0] || null;
        })

    builder
        .addCase(authMe.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = {
                id: action.payload.id,
                username: action.payload.username,
                role: action.payload.role
            }
        })
}