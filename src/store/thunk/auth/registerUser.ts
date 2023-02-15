import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser, IUserAuth} from "../../../models/user";
import {authApi} from "../../../api/authApi";
import {AxiosError} from "axios";

interface UserNotFoundError {
    error: string;
    message: string;
    statusCode: number;
}

export const registerUser = createAsyncThunk<
    { user: IUser, accessToken: string },
    IUserAuth,
    { rejectValue: UserNotFoundError }
>(
    'auth/signup',
    async (data: IUserAuth, { rejectWithValue }) => {
        try {
            const response = await authApi.register(data);
            return response.data;
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as UserNotFoundError);
            }
        }
    }
)