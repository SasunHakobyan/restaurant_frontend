import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./layout/Navigation/Navigation";

import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import AuthModal from "./components/AuthModal/AuthModal";
import {useAppSelector} from "./store/store";
import {useDispatch} from "react-redux";
import {modalSlice} from "./store/reducers/modalReducer";

function App() {
    const modalState = useAppSelector(state => state.modalReducer);
    const authState = useAppSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const toggleModal = (showModal: boolean) => {
        dispatch(modalSlice.actions.setShowModal(showModal));
    }

    return (
        <div className='app'>
            {!authState.isLoggedIn && modalState.showModal && <AuthModal toggleModal={toggleModal} />}
            <Navigation isLoggedIn={authState.isLoggedIn} toggleModal={toggleModal} />
            <Routes>
                <Route path='/' element={<HomePage/>} />
            </Routes>
            <div style={{width: '25%'}}>Orders</div>
        </div>
    );
}

export default App;