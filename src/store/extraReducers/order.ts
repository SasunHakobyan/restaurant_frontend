import {makeOrder} from "../thunk/order/makeOrder";
import {getOrders} from "../thunk/order/getOrders";
import {changeStatus} from "../thunk/order/changeStatus";
import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {IOrderState} from "../reducers/orderReducer";

export const orderExtraReducers = (builder: ActionReducerMapBuilder<IOrderState>) => {
    builder
        .addCase(makeOrder.fulfilled, (state, action) => {
            state.createdSuccess = true;
            state.infoMessage = 'Order Created'
        })
        .addCase(makeOrder.rejected, (state, action) => {
            state.infoMessage = action.payload?.message;
        })

    builder
        .addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
        })
        .addCase(getOrders.rejected, (state, action) => {
            state.infoMessage = action.payload?.message;
        })

    builder
        .addCase(changeStatus.fulfilled, (state, action) => {
            state.showStatusModal = false
        })
        .addCase(changeStatus.rejected, (state ,action) => {
            state.infoMessage = action.payload?.message;
        })
}