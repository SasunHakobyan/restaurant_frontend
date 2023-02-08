import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { authApi } from "../services/authApi";
import { restaurantApi } from "../services/restaurantApi";
import authReducer from "./reducers/authReducer";
import modalReducer from "./reducers/modalReducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
    modalReducer: modalReducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer,
    [authApi.reducerPath]: authApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantApi.middleware, authApi.middleware)
});

export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;