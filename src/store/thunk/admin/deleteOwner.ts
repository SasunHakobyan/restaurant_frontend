import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../../api/userApi";

export const deleteOwner = createAsyncThunk(
    'admn/deleteOwner',
    async (ownerId: number) => {
        try {
            const response = await userApi.deleteOwner(ownerId);
            return response.data;
        } catch (err) {

        }
    }
)