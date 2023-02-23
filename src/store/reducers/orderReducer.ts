import {createSlice} from "@reduxjs/toolkit";
import {IOrder} from "../../models/order";
import {orderExtraReducers} from "../extraReducers/order";

export type IOrderState = {
    orders: IOrder[],
    createdSuccess: boolean;
    infoMessage: string | undefined;
    showStatusModal: boolean;
    statusChangeOrderId: number | undefined;
}

const initialState: IOrderState = {
    orders: [],
    createdSuccess: false,
    infoMessage: undefined,
    showStatusModal: false,
    statusChangeOrderId: undefined,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearOrderMessages(state) {
            state.createdSuccess = false;
            state.infoMessage = undefined;
        },

        toggleStatusModal(state, action) {
            state.statusChangeOrderId = action.payload;
            state.showStatusModal = !state.showStatusModal;
        },
    },

    extraReducers: orderExtraReducers
})

export const {clearOrderMessages, toggleStatusModal} = orderSlice.actions;

export default orderSlice.reducer;