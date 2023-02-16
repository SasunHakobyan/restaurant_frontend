import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/user";
import {fillOwners} from "../thunk/admin/fillOwners";
import {deleteOwner} from "../thunk/admin/deleteOwner";
import {addOwner} from "../thunk/admin/addOwner";

interface IAdminState {
    owners: IUser[];
    addError: string | null;
}

const initialState: IAdminState = {
    owners: [],
    addError: null
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

        build
            .addCase(deleteOwner.fulfilled, (state, action) => {

            })
            .addCase(deleteOwner.rejected, () => {

            })

        build
            .addCase(addOwner.fulfilled, (state, action) => {
                console.log(action);
            })
            .addCase(addOwner.rejected, (state, action) => {
                console.log(action.response.data.message)
            })
    }
});

export default adminSlice.reducer;