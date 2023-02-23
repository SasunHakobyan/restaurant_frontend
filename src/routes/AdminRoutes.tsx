import React from 'react';
import {Route, Routes} from "react-router-dom";
import AdminHomePage from "../pages/AdminPages/AdminHomePage/AdminHomePage";
import OwnersPage from "../pages/AdminPages/OwnersPage/OwnersPage";
import AddOwnerPage from "../pages/AdminPages/OwnersPage/AddOwnerPage/AddOwnerPage";
import DeleteRestaurantPage from "../pages/AdminPages/DeleteRestaurantPage/DeleteRestaurantPage";
import DeleteMealsPage from "../pages/AdminPages/DeleteMealsPage/DeleteMealsPage";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<AdminHomePage/>}/>
            <Route path='/owners' element={<OwnersPage/>}/>
            <Route path='/add-owner' element={<AddOwnerPage/>}/>
            <Route path='/delete-restaurant' element={<DeleteRestaurantPage/>} />
            <Route path='/delete-meal' element={<DeleteMealsPage/>} />
        </Routes>
    );
};

export default AdminRoutes;