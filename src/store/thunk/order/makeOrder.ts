import {createAsyncThunk} from "@reduxjs/toolkit";
import {orderApi} from "../../../api/orderApi";
import {IOrder, IOrderData} from "../../../models/order";
import {ServerError} from "../../../models/errors";
import {AxiosError} from "axios";

export const makeOrder = createAsyncThunk<
    IOrder,
    IOrderData,
    {rejectValue: ServerError}
>(
    'order/makeOrder',
    async (orderData, {rejectWithValue}) => {
        try {
            const response = await orderApi.makeOrder(orderData);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                return rejectWithValue(err?.response?.data as ServerError);
            }
        }
    }
)