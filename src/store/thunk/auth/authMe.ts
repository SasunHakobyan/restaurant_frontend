import {createAsyncThunk} from "@reduxjs/toolkit";
import {authApi} from "../../../api/authApi";
import {AxiosError} from "axios";

export const authMe = createAsyncThunk(
    'auth/me',
    async (arg, { rejectWithValue }) => {
        try {
            const response = await authApi.authMe();
            return response.data;
        } catch (err: unknown) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data);
            }
        }
    }
)