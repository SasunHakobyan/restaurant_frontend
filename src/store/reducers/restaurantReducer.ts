import { createSlice } from "@reduxjs/toolkit";
import { IRestaurant } from "../../models/restaurant";
import {restaurantExtraReducers} from "../extraReducers/restaurant";

export type IRestaurantState = {
    restaurants: IRestaurant[] | null;
    restaurantFormData: Omit<IRestaurant, "id" | "ownerId">;
    savedSuccess: boolean | undefined;
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
    savedSuccess: undefined,
    isLoading: false,
    infoMessage: undefined
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        clearMessages(state) {
            state.infoMessage = undefined;
            state.savedSuccess = undefined;
        },
    },

    extraReducers: restaurantExtraReducers
});

export const {clearMessages} = restaurantSlice.actions;

export default restaurantSlice.reducer;