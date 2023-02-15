import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../../api/userApi";

export const fillOwners = createAsyncThunk(
    'admin/fillOwners',
    async () => {
        try {
            const response = await userApi.getOwners();
            return response.data;
        } catch (err) {

        }
    }
)