import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IModalState {
    show: boolean;
    modalMessage: string;
}

const initialState: IModalState = {
    show: false,
    modalMessage: ''
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        setShowMessage(state, action: PayloadAction<{ toggle: boolean, message: string }>) {
            state.show = action.payload.toggle;
            state.modalMessage = action.payload.message;
        },

        closeModal(state) {
            state.show = false;
            state.modalMessage = ''
        }
    }
});

export default modalSlice.reducer;