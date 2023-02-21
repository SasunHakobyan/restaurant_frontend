import {createAsyncThunk} from "@reduxjs/toolkit";
import {orderApi} from "../../../api/orderApi";
import {IOrderData} from "../../../models/order";

export const makeOrder = createAsyncThunk(
    'order/makeOrder',
    async (orderData: IOrderData) => {
        try {
            const response = await orderApi.makeOrder(orderData);
            return response.data;
        } catch (err) {

        }
    }
)