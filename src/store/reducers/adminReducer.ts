import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/user";
import {fillOwners} from "../thunk/admin/fillOwners";
import {deleteOwner} from "../thunk/admin/deleteOwner";
import {addOwner} from "../thunk/admin/addOwner";

interface IAdminState {
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

    extraReducers(build) {
        build
            .addCase(fillOwners.fulfilled, (state, action) => {
                state.owners = action.payload;
            })
            .addCase(fillOwners.rejected, () => {

            })

        build
            .addCase(deleteOwner.fulfilled, (state, action) => {
                state.infoMessage = 'Owner Deleted';
            })
            .addCase(deleteOwner.rejected, (state, action) => {
                state.infoMessage = action.payload?.message;
            })

        build
            .addCase(addOwner.fulfilled, (state) => {
                state.infoMessage = 'Owner Created';
            })
            .addCase(addOwner.rejected, (state, action) => {
                state.infoMessage = action.payload?.message;
            })
    }
});

export default adminSlice.reducer;