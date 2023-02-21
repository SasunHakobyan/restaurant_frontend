import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authReducer from "./reducers/authReducer";
import restaurantReducer from "./reducers/restaurantReducer";
import mealReducer from "./reducers/mealReducer";
import modalReducer from "./reducers/modalReducer";
import adminReducer from "./reducers/adminReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
    adminReducer: adminReducer,
    restaurantReducer: restaurantReducer,
    mealReducer: mealReducer,
    modalReducer: modalReducer,
    cartReducer: cartReducer,
    orderReducer: orderReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>

type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;