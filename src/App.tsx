import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Navigation from "./layout/Navigation/Navigation";

import './app.css';
import AuthModal from "./components/AuthModal/AuthModal";
import { useAppDispatch, useAppSelector } from "./store/store";
import RestaurantsPage from "./pages/UserPages/RestaurantsPage/RestaurantsPage";
import { ProtectAuth } from './hoc/ProtectAuth';
import AddRestaurantPage from './pages/OwnerPages/AddRestaurantPage/AddRestaurantPage';
import EditRestaurantPage from './pages/OwnerPages/EditRestaurantPage/EditRestaurantPage';
import {authMe} from "./store/thunk/auth/authMe";
import AddOwnerPage from "./pages/AdminPages/AddOwnerPage/AddOwnerPage";
import ProtectOwner from "./hoc/ProtectOwner";
import ProtectAdmin from "./hoc/ProtectAdmin";
import HomePage from "./pages/UserPages/HomePage/HomePage";
import MealsPage from "./pages/UserPages/MealsPage/MealsPage";
import InfoModal from "./components/InfoModal/InfoModal";

function App() {
    const authState = useAppSelector(state => state.authReducer);
    const modalState = useAppSelector(state => state.modalReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authMe());
    }, []);

    return (
        <div className='app'>
            {modalState.show && <InfoModal/>}
            {!authState.isLoggedIn && authState.showModal && <AuthModal />}
            <Navigation isLoggedIn={authState.isLoggedIn} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/restaurants' element={
                    <ProtectAuth>
                        <RestaurantsPage />
                    </ProtectAuth>
                } />
                <Route path='/meals' element={
                    <ProtectAuth>
                        <MealsPage />
                    </ProtectAuth>
                } />

                <Route path='/admin/add-restaurant' element={
                    <ProtectOwner>
                        <AddRestaurantPage />
                    </ProtectOwner>
                } />
                <Route path='/admin/edit-restaurant/:restaurantId' element={
                    <ProtectOwner>
                        <EditRestaurantPage />
                    </ProtectOwner>
                } />
                <Route path='/admin/add-owner' element={
                    <ProtectAdmin>
                        <AddOwnerPage/>
                    </ProtectAdmin>
                }/>
            </Routes>
        </div>
    );
}

export default App;