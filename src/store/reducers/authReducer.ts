import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserAuth } from "../../models/user";
import { authApi } from "../../services/authApi";
import { AxiosError } from "axios";

interface IAuthState {
    showModal: boolean;
    isLoading: boolean;
    error: string | null;
    isLoggedIn: boolean;
    user: IUser | null
}

interface UserNotFoundError {
    error: string;
    message: string;
    statusCode: number;
}

const initialState: IAuthState = {
    showModal: false,
    isLoading: false,
    error: null,
    isLoggedIn: false,
    user: null
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

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<IUser>) {
            state.isLoggedIn = true;
            state.user = action.payload;
        },

        logout(state) {
            localStorage.removeItem('authToken');

            state = initialState;
        },

        setShowModal(state, action: PayloadAction<boolean>) {
            state.showModal = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.error = null;

                state.user = {
                    id: action.payload.user.id,
                    username: action.payload.user.username,
                    role: action.payload.user.role
                };

                state.showModal = false;

                localStorage.setItem('authToken', action.payload.accessToken);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || null;
            })

        builder
            .addCase(authMe.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.user = {
                    id: action.payload.id,
                    username: action.payload.username,
                    role: action.payload.role
                }
            })
            .addCase(authMe.rejected, (state, action) => {
                state.error = 'Unauthorized';
            })
    }
});

export default authSlice.reducer;