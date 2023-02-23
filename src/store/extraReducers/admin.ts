import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {IAdminState} from "../reducers/adminReducer";
import {fillOwners} from "../thunk/admin/fillOwners";
import {deleteOwner} from "../thunk/admin/deleteOwner";
import {addOwner} from "../thunk/admin/addOwner";

export const adminExtraReducers = (build: ActionReducerMapBuilder<IAdminState>) => {
    build
        .addCase(fillOwners.fulfilled, (state, action) => {
            state.owners = action.payload;
        })
        .addCase(fillOwners.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })

    build
        .addCase(deleteOwner.fulfilled, (state, action) => {
            state.infoMessage = 'Owner Deleted';
        })
        .addCase(deleteOwner.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })

    build
        .addCase(addOwner.fulfilled, (state) => {
            state.infoMessage = 'Owner Created';
        })
        .addCase(addOwner.rejected, (state, action) => {
            state.infoMessage = action.payload?.message[0];
        })
}