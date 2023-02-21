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
import DeleteRestaurantPage from "./pages/AdminPages/DeleteRestaurantPage/DeleteRestaurantPage";
import DeleteMealsPage from "./pages/AdminPages/DeleteMealsPage/DeleteMealsPage";
import OwnerHomePage from "./pages/OwnerPages/OwnerHomePage/OwnerHomePage";
import OwnerRestaurantsPage from "./pages/OwnerPages/OwnerRestaurantsPage/OwnerRestaurantsPage";
import OwnerMealsPage from "./pages/OwnerPages/OwnerMealsPage/OwnerMealsPage";
import AddMealPage from "./pages/OwnerPages/AddMealPage/AddMealPage";
import EditMealPage from "./pages/OwnerPages/EditMealPage/EditMealPage";
import RestaurantDetailPage from "./pages/UserPages/RestaurantDetailPage/RestaurantDetailPage";
import Cart from "./components/Cart/Cart";
import OrderPage from "./pages/UserPages/OrderPage/OrderPage";

function App() {
    const authState = useAppSelector(state => state.authReducer);
    const modalState = useAppSelector(state => state.modalReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!authState.isLoggedIn) {
            dispatch(authMe());
        }
    }, []);

    return (
        <div className='app'>
            {modalState.show && <InfoModal/>}
            {!authState.isLoggedIn && authState.showModal && <AuthModal />}
            <Navigation isLoggedIn={authState.isLoggedIn} />
            <Cart/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/restaurant/:id' element={
                    <ProtectAuth>
                        <RestaurantDetailPage/>
                    </ProtectAuth>
                }/>
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
                <Route path='/orders' element={
                    <ProtectAuth>
                        <OrderPage/>
                    </ProtectAuth>
                }/>

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
                <Route path='/admin/delete-restaurant' element={
                    <ProtectAdmin>
                        <DeleteRestaurantPage/>
                    </ProtectAdmin>
                } />
                <Route path='/admin/delete-meal' element={
                    <ProtectAdmin>
                        <DeleteMealsPage/>
                    </ProtectAdmin>
                } />

                <Route path='/owner' element={
                    <ProtectOwner>
                        <OwnerHomePage/>
                    </ProtectOwner>
                }/>
                <Route path='/owner/restaurants' element={
                    <ProtectOwner>
                        <OwnerRestaurantsPage/>
                    </ProtectOwner>
                }/>
                <Route path='/owner/add-restaurant' element={
                    <ProtectOwner>
                        <AddRestaurantPage />
                    </ProtectOwner>
                } />
                <Route path='/owner/edit-restaurant/:restaurantId' element={
                    <ProtectOwner>
                        <EditRestaurantPage />
                    </ProtectOwner>
                } />
                <Route path='/owner/meals' element={
                    <ProtectOwner>
                        <OwnerMealsPage />
                    </ProtectOwner>
                } />
                <Route path='/owner/add-meal' element={
                    <ProtectOwner>
                        <AddMealPage />
                    </ProtectOwner>
                } />
                <Route path='/owner/edit-meal/:mealId' element={
                    <ProtectOwner>
                        <EditMealPage />
                    </ProtectOwner>
                } />

            </Routes>
        </div>
    );
}

export default App;