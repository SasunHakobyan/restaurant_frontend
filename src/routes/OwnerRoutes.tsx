import React from 'react';
import {Route, Routes} from "react-router-dom";
import OwnerHomePage from "../pages/OwnerPages/OwnerHomePage/OwnerHomePage";
import OwnerRestaurantsPage from "../pages/OwnerPages/OwnerRestaurantsPage/OwnerRestaurantsPage";
import AddRestaurantPage from "../pages/OwnerPages/AddRestaurantPage/AddRestaurantPage";
import EditRestaurantPage from "../pages/OwnerPages/EditRestaurantPage/EditRestaurantPage";
import OwnerMealsPage from "../pages/OwnerPages/OwnerMealsPage/OwnerMealsPage";
import AddMealPage from "../pages/OwnerPages/AddMealPage/AddMealPage";
import EditMealPage from "../pages/OwnerPages/EditMealPage/EditMealPage";

const OwnerRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<OwnerHomePage/>}/>
            <Route path='/restaurants' element={<OwnerRestaurantsPage/>}/>
            <Route path='/add-restaurant' element={<AddRestaurantPage />} />
            <Route path='/edit-restaurant/:restaurantId' element={<EditRestaurantPage />} />
            <Route path='/meals' element={<OwnerMealsPage />} />
            <Route path='/add-meal' element={<AddMealPage />} />
            <Route path='/edit-meal/:mealId' element={<EditMealPage />} />
        </Routes>
    );
};

export default OwnerRoutes;