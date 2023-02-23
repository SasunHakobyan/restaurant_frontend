import {createAsyncThunk} from "@reduxjs/toolkit";
import {orderApi} from "../../../api/orderApi";
import {IOrder} from "../../../models/order";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const getOrders = createAsyncThunk<
    IOrder[],
    void,
    {rejectValue: ServerError}
>(
    'order/getOrders',
    async (arg, {rejectWithValue}) => {
        try {
            const response = await orderApi.getOrders();
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)