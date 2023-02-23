import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/user";
import {adminExtraReducers} from "../extraReducers/admin";

export type IAdminState = {
    owners: IUser[];
    infoMessage: string | undefined;
}

const initialState: IAdminState = {
    owners: [],
    infoMessage: undefined
};

export const adminSlice = createSlice({
    name: 'meal',
    initialState,

    reducers: {
        clearMessages(state) {
            state.infoMessage = undefined;
        }
    },

    extraReducers: adminExtraReducers,
});

export const {clearMessages} = adminSlice.actions;

export default adminSlice.reducer;