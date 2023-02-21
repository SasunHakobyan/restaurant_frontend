import {createAsyncThunk} from "@reduxjs/toolkit";
import {IChangeStatus} from "../../../models/order";
import {orderApi} from "../../../api/orderApi";

export const changeStatus = createAsyncThunk(
    'order/changeStatus',
    async (options: IChangeStatus) => {
        const response = await orderApi.changeStatus(options);
        return response.data;
    }
)