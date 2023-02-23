import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/UserPages/HomePage/HomePage";
import RestaurantMealsPage from "../pages/UserPages/RestaurantMealsPage/RestaurantMealsPage";
import RestaurantsPage from "../pages/UserPages/RestaurantsPage/RestaurantsPage";
import MealsPage from "../pages/UserPages/MealsPage/MealsPage";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/restaurant/:id' element={<RestaurantMealsPage/>}/>
            <Route path='/restaurants' element={<RestaurantsPage />} />
            <Route path='/meals' element={<MealsPage />} />
            <Route path='/orders' element={<div>Reconstruction</div>}/>
            <Route path='/*' element={<div>Page not found</div>}/>
        </Routes>
    );
};

export default PublicRoutes;