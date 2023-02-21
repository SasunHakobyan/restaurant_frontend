import {createSlice} from "@reduxjs/toolkit";
import {IOrder, Status} from "../../models/order";
import {makeOrder} from "../thunk/order/makeOrder";
import {getOrders} from "../thunk/order/getOrders";

interface IOrderState {
    orders: IOrder[],
    createdSuccess: boolean;
    infoMessage: string | undefined;
    showStatusModal: boolean;
}

const initialState: IOrderState = {
    orders: [],
    createdSuccess: false,
    infoMessage: undefined,
    showStatusModal: false,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        clearOrderMessages(state) {
            state.createdSuccess = false;
            state.infoMessage = undefined;
        },

        toggleStatusModal(state) {
            state.showStatusModal = !state.showStatusModal;
        }
    },
    extraReducers(builder) {
        builder.addCase(makeOrder.fulfilled, (state, action) => {
            state.createdSuccess = true;
            state.infoMessage = 'Order Created'
        })

        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
        })
    }
})

export const {clearOrderMessages, toggleStatusModal} = orderSlice.actions;

export default orderSlice.reducer;