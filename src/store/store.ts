import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authReducer from "./reducers/authReducer";
import modalReducer from "./reducers/modalReducer";

const rootReducer = combineReducers({
    userReducer: authReducer,
    modalReducer: modalReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;