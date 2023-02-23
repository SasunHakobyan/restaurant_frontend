import {createAsyncThunk} from "@reduxjs/toolkit";
import {IChangeStatus, IOrder} from "../../../models/order";
import {orderApi} from "../../../api/orderApi";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const changeStatus = createAsyncThunk<
    IOrder,
    IChangeStatus,
    {rejectValue: ServerError}
>(
    'order/changeStatus',
    async (options, {rejectWithValue}) => {
        try {
            const response = await orderApi.changeStatus(options);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)