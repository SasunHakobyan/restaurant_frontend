import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser, IUserAuth} from "../../../models/user";
import {authApi} from "../../../api/authApi";
import {AxiosError} from "axios";
import {ServerError} from "../../../models/errors";

export const registerUser = createAsyncThunk<
    { user: IUser, accessToken: string },
    IUserAuth,
    { rejectValue: ServerError }
>(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const response = await authApi.register(data);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)