import {createAsyncThunk} from "@reduxjs/toolkit";
import {orderApi} from "../../../api/orderApi";

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async () => {
        try {
            const response = await orderApi.getOrders();
            return response.data;
        } catch (err) {

        }
    }
)