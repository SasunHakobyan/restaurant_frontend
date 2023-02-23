import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../../api/userApi";
import {IUser, IUserAuth} from "../../../models/user";
import {AxiosError} from "axios";
import {ServerError} from "../../../models/errors";

export const addOwner = createAsyncThunk<
    {user: IUser},
    IUserAuth,
    {rejectValue: ServerError}
>(
    'admin/addOwner',
    async (data: IUserAuth, {rejectWithValue}) => {
        try {
            const response = await userApi.signOwner(data);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)