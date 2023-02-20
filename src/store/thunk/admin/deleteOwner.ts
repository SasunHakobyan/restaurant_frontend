import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../../api/userApi";
import {AxiosError} from "axios";
import {IUser} from "../../../models/user";

export const deleteOwner = createAsyncThunk<
    {user: IUser},
    number,
    {rejectValue: {message: string}}
>(
    'admn/deleteOwner',
    async (ownerId: number, {rejectWithValue}) => {
        try {
            const response = await userApi.deleteOwner(ownerId);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as {message: string})
            }
        }
    }
)