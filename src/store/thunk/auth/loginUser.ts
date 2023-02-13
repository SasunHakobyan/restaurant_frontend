import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser, IUserAuth} from "../../../models/user";
import {authApi} from "../../../services/authApi";
import {AxiosError} from "axios";

interface UserNotFoundError {
    error: string;
    message: string;
    statusCode: number;
}

export const loginUser = createAsyncThunk<
    { user: IUser, accessToken: string },
    IUserAuth,
    { rejectValue: UserNotFoundError }
>(
    'auth/signin',
    async (data: IUserAuth, { rejectWithValue }) => {
        try {
            const response = await authApi.login(data);
            return response.data;
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as UserNotFoundError);
            }
        }
    }
)