import { createSlice } from "@reduxjs/toolkit";
import { IRestaurant } from "../../models/restaurant";
import {restaurantExtraReducers} from "../extraReducers/restaurant";

export type IRestaurantState = {
    restaurants: IRestaurant[] | null;
    restaurantFormData: Omit<IRestaurant, "id" | "ownerId">;
    saved: boolean;
    isLoading: boolean;
    infoMessage: string | undefined;
}

const initialState: IRestaurantState = {
    restaurants: null,
    restaurantFormData: {
        name: '',
        description: '',
        imgUrl: ''
    },
    saved: false,
    isLoading: false,
    infoMessage: undefined
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        clearMessages(state) {
            state.infoMessage = undefined;
        }
    },

    extraReducers: restaurantExtraReducers
});

export const {clearMessages} = restaurantSlice.actions;

export default restaurantSlice.reducer;