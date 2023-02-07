import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IModalState {
    showModal: boolean,
    isLoginForm: boolean;
}

const initialState: IModalState = {
    showModal: false,
    isLoginForm: true
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setShowModal(state, action: PayloadAction<boolean>) {
            state.showModal = action.payload;
        }
    }
});

export default modalSlice.reducer;