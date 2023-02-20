import {createAsyncThunk} from "@reduxjs/toolkit";
import {userApi} from "../../../api/userApi";
import {IUser, IUserAuth, UserNotFoundError} from "../../../models/user";
import {AxiosError} from "axios";

export const addOwner = createAsyncThunk<
    {user: IUser},
    IUserAuth,
    {rejectValue: UserNotFoundError}
>(
    'admin/addOwner',
    async (data: IUserAuth, {rejectWithValue}) => {
        try {
            const response = await userApi.signOwner(data);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as UserNotFoundError);
            }
        }
    }
)