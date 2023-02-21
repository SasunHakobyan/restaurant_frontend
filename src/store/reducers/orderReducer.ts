import {createSlice} from "@reduxjs/toolkit";
import {IOrder, Status} from "../../models/order";
import {makeOrder} from "../thunk/order/makeOrder";
import {getOrders} from "../thunk/order/getOrders";
import {changeStatus} from "../thunk/order/changeStatus";

interface IOrderState {
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
        }
    },
    extraReducers(builder) {
        builder
            .addCase(makeOrder.fulfilled, (state, action) => {
                state.createdSuccess = true;
                state.infoMessage = 'Order Created'
            })

        builder
            .addCase(getOrders.fulfilled, (state, action) => {
                state.orders = action.payload;
            })

        builder
            .addCase(changeStatus.fulfilled, (state, action) => {
                state.showStatusModal = false
            })
    }
})

export const {clearOrderMessages, toggleStatusModal} = orderSlice.actions;

export default orderSlice.reducer;