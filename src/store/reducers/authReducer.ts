import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, RoleValue, UserSign} from "../../models/user";
import {auhtExtraReducers} from "../extraReducers/auth";

export type IAuthState = {
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

    extraReducers: auhtExtraReducers
});

export const {login, logout, setFormOption, setShowModal} = authSlice.actions;

export default authSlice.reducer;