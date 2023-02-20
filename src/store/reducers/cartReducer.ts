import {createSlice} from "@reduxjs/toolkit";
import {ICart} from "../../models/cart";

interface ICartState {
    cartToggle: boolean;
    items: ICart[]
}

const initialState: ICartState = {
    cartToggle: false,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.cartToggle = !state.cartToggle;
        },

        addToCart(state, action) {
            state.items.push({
                mealId: action.payload.mealId,
                img: action.payload.imgUrl,
                name: action.payload.name,
                amount: 1,
                price: action.payload.price
            });
        },

        addAmount(state, action) {
            const newItems = state.items.map(item => {
                if (item.mealId === action.payload.mealId) {
                    item.amount++;
                    return item
                }
            });

            state.items = newItems;
        },

        minusAmount(state, action) {
            const newItems = state.items.map(item => {
                if (item.mealId === action.payload.mealId) {
                    item.amount--;
                    return item
                }
            });

            state.items = newItems;
        }
    }
})

export const {
    toggleCart,
    addToCart,
    addAmount,
    minusAmount
} = cartSlice.actions;

export default cartSlice.reducer;