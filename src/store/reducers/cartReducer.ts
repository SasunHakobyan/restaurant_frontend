import {createSlice} from "@reduxjs/toolkit";
import {ICart} from "../../models/cart";
import {stat} from "fs";

interface ICartState {
    cartToggle: boolean;
    itemCount: number;
    items: ICart[]
}

const initialState: ICartState = {
    cartToggle: false,
    itemCount: 0,
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
            let objectIndex = -1;
            state.items.forEach((item, index) => {
                if (item.mealId === action.payload.mealId) objectIndex = index;
            })

            if (objectIndex !== -1) {
                state.items[objectIndex].amount++;
            } else {
                state.items.push({
                    mealId: action.payload.mealId,
                    img: action.payload.imgUrl,
                    name: action.payload.name,
                    amount: 1,
                    price: action.payload.price
                });

                state.itemCount++;
            }
        },

        addAmount(state, action) {
            let objectIndex: number = -1;
            state.items.forEach((item, index) => {
                if (item.mealId === action.payload) objectIndex = index
            });

            if (objectIndex !== -1) {
                state.items[objectIndex].amount++;
            }
        },

        minusAmount(state, action) {
            let objectIndex: number = -1;
            state.items.forEach((item, index) => {
                if (item.mealId === action.payload) objectIndex = index
            });

            if (objectIndex !== -1 && state.items[objectIndex].amount !== 1) {
                state.items[objectIndex].amount--;
            }
        },

        deleteItem(state, action) {
            state.items = state.items.filter(item => {
                return item.mealId !== action.payload;
            })

            state.itemCount--;
        }
    }
})

export const {
    toggleCart,
    addToCart,
    addAmount,
    minusAmount,
    deleteItem
} = cartSlice.actions;

export default cartSlice.reducer;