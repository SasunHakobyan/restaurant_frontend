import {createSlice} from "@reduxjs/toolkit";
import {IOrder} from "../../models/order";
import {makeOrder} from "../thunk/order/makeOrder";

interface IOrderState {
    orders: IOrder[],
    createdSuccess: boolean;
    infoMessage: string | undefined;
}

const initialState: IOrderState = {
    orders: [],
    createdSuccess: false,
    infoMessage: undefined
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearOrderMessages(state) {
            state.createdSuccess = false;
            state.infoMessage = undefined;
        }
    },
    extraReducers(builder) {
        builder.addCase(makeOrder.fulfilled, (state, action) => {
            state.createdSuccess = true;
            state.infoMessage = 'Order Created'
        })
    }
})

export const {clearOrderMessages} = orderSlice.actions;

export default orderSlice.reducer;