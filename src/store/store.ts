import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authReducer from "./reducers/authReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import mealReducer from "./reducers/mealReducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
    restaurantReducer: restaurantReducer,
    mealReducer: mealReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>

type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;