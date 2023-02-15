import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMeal} from "../../models/meal";
import {mealApi} from "../../api/mealApi";

interface IMealState {
    meals: IMeal[] | null
}

const initialState: IMealState = {
    meals: null
}

export const fillMeals = createAsyncThunk(
    'meal/getAll',
    async () => {
        try {
            const response = await mealApi.getAll();
            return response.data;
        } catch (err) {

        }
    }
)

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fillMeals.pending, (state, action) => {

            })
            .addCase(fillMeals.fulfilled, (state, action) => {
                state.meals = action.payload;
            })
            .addCase(fillMeals.rejected, (state, action) => {

            })
    }
});

export default mealSlice.reducer;