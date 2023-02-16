import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../../api/userApi";
import {IUserAuth} from "../../../models/user";

export const addOwner = createAsyncThunk(
    'admin/addOwner',
    async (data: IUserAuth, {rejectWithValue}) => {
        try {
            const response = await userApi.signOwner(data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)