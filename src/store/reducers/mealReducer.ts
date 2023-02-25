import {createSlice} from "@reduxjs/toolkit";
import {IMeal} from "../../models/meal";
import {mealExtraReducers} from "../extraReducers/meal";

export type IMealState = {
    meals: IMeal[] | null;
    infoMessage: string | undefined;
    successSave: boolean | undefined;
    mealDetailId: number | undefined;
    mealDetail: IMeal | undefined;
    mealFormData: Omit<IMeal, "id">;
    isLoading: boolean;
}

const initialState: IMealState = {
    meals: null,
    infoMessage: undefined,
    successSave: undefined,
    mealFormData: {
        name: '',
        description: '',
        imgUrl: '',
        restaurantId: 0,
        price: 0
    },
    mealDetailId: undefined,
    mealDetail: undefined,
    isLoading: false
}

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
        clearMessages(state) {
            state.infoMessage = undefined;
            state.successSave = undefined;
        },
        setMealDetailId(state, action) {
            state.mealDetailId = action.payload;
        }
    },

    extraReducers: mealExtraReducers
});

export const {clearMessages, setMealDetailId} = mealSlice.actions;

export default mealSlice.reducer;