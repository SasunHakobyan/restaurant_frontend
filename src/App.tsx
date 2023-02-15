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
import AddOwnerPage from "./pages/AdminPages/OwnersPage/AddOwnerPage/AddOwnerPage";
import ProtectOwner from "./hoc/ProtectOwner";
import ProtectAdmin from "./hoc/ProtectAdmin";
import HomePage from "./pages/UserPages/HomePage/HomePage";
import MealsPage from "./pages/UserPages/MealsPage/MealsPage";
import InfoModal from "./components/InfoModal/InfoModal";
import AdminHomePage from "./pages/AdminPages/AdminHomePage/AdminHomePage";
import OwnersPage from "./pages/AdminPages/OwnersPage/OwnersPage";

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

                <Route path='/admin' element={
                    <ProtectAdmin>
                        <AdminHomePage/>
                    </ProtectAdmin>
                }/>
                <Route path='/admin/owners' element={
                    <ProtectAdmin>
                        <OwnersPage/>
                    </ProtectAdmin>
                }/>
                <Route path='/admin/add-owner' element={
                    <ProtectAdmin>
                        <AddOwnerPage/>
                    </ProtectAdmin>
                }/>


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
            </Routes>
        </div>
    );
}

export default App;