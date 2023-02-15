import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/user";
import {fillOwners} from "../thunk/admin/fillOwners";

interface IAdminState {
    owners: IUser[];
}

const initialState: IAdminState = {
    owners: []
};

export const adminSlice = createSlice({
    name: 'meal',
    initialState,

    reducers: {
    },

    extraReducers(build) {
        build
            .addCase(fillOwners.fulfilled, (state, action) => {
                state.owners = action.payload;
            })
            .addCase(fillOwners.rejected, () => {

            })
    }
});

export default adminSlice.reducer;