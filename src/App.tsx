import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Navigation from "./layout/Navigation/Navigation";

import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import AuthModal from "./components/AuthModal/AuthModal";
import { useAppDispatch, useAppSelector } from "./store/store";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import MealsPage from "./pages/MealsPage/MealsPage";
import { authMe } from "./store/reducers/authReducer";

function App() {
    const authState = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(authMe());
    }, []);

    return (
        <div className='app'>
            {!authState.isLoggedIn && authState.showModal && <AuthModal />}
            <Navigation isLoggedIn={authState.isLoggedIn} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/restaurants' element={<RestaurantsPage />} />
                <Route path='/meals' element={<MealsPage />} />
            </Routes>
        </div>
    );
}

export default App;