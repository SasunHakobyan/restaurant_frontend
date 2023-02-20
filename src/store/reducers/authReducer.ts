import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, RoleValue, UserSign} from "../../models/user";
import {loginUser} from "../thunk/auth/loginUser";
import {authMe} from "../thunk/auth/authMe";
import {registerUser} from "../thunk/auth/registerUser";

interface IAuthState {
    showModal: boolean;
    authFormOption: UserSign;
    isLoading: boolean;
    error: string | null;
    isLoggedIn: boolean;
    user: IUser;
}

const initialState: IAuthState = {
    authFormOption: UserSign.SignIn,
    showModal: false,
    isLoading: false,
    error: null,
    isLoggedIn: false,
    user: {
        id: 0,
        username: '',
        role: {value: RoleValue.User},
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state.isLoggedIn = true;
            state.user = action.payload;
        },

        logout(state) {
            localStorage.removeItem('authToken');

            state.isLoggedIn = false;
            state = initialState;
        },

        setShowModal(state, action: PayloadAction<boolean>) {
            state.showModal = action.payload;
        },

        setFormOption(state, action: PayloadAction<UserSign>) {
            state.authFormOption = action.payload;
        }
    },
    extraReducers: (builder) => {
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
                state.error = action.payload?.message || null;
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
                state.error = action.payload?.message || null;
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
});

export default authSlice.reducer;