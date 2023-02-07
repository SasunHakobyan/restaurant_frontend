import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../models/user";

interface IAuthState {
    isLoggedIn: boolean;
    user: IUser | null
}

const initialState: IAuthState = {
    isLoggedIn: false,
    user: null
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
            state.isLoggedIn = false;
            state.user = null;
        }
    }
});

export default authSlice.reducer;