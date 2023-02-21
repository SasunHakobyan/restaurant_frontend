import {createSlice} from "@reduxjs/toolkit";
import {ICartItem} from "../../models/cart";

interface ICartState {
    restaurantId: number | undefined;
    cartToggle: boolean;
    itemCount: number;
    items: ICartItem[]
}

const initialState: ICartState = {
    restaurantId: undefined,
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

        clearCart(state) {
            state.restaurantId = undefined;
            state.cartToggle = false;
            state.itemCount = 0;
            state.items = [];
        },

        addToCart(state, action) {
            let objectIndex = -1;
            state.items.forEach((item, index) => {
                if (item.mealId === action.payload.mealId) objectIndex = index;
            })

            if (objectIndex !== -1) {
                state.items[objectIndex].amount++;
            } else {
                if (!state.restaurantId) {
                    state.restaurantId = action.payload.restaurantId;
                }

                if (state.restaurantId === action.payload.restaurantId) {
                    state.items.push({
                        mealId: action.payload.mealId,
                        img: action.payload.imgUrl,
                        name: action.payload.name,
                        amount: 1,
                        price: action.payload.price
                    });

                    state.itemCount++;
                }
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
    deleteItem,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;