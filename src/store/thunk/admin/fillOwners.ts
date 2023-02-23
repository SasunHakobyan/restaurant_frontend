import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../../api/userApi";
import {AxiosError} from "axios";
import {ServerError} from "../../../models/errors";
import {IUser} from "../../../models/user";

export const fillOwners = createAsyncThunk<
    IUser[],
    void,
    {rejectValue: ServerError}
>(
    'admin/fillOwners',
    async (data, {rejectWithValue}) => {
        try {
            const response = await userApi.getOwners();
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)