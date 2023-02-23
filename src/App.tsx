import React, { useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import Navigation from "./layout/Navigation/Navigation";

import './app.css';
import AuthModal from "./components/AuthModal/AuthModal";
import { useAppDispatch, useAppSelector } from "./store/store";
import {authMe} from "./store/thunk/auth/authMe";
import InfoModal from "./components/InfoModal/InfoModal";
import Cart from "./components/Cart/Cart";
import PublicRoutes from "./routes/PublicRoutes";
import OwnerRoutes from "./routes/OwnerRoutes";
import ProtectOwner from "./hoc/ProtectOwner";
import ProtectAdmin from "./hoc/ProtectAdmin";
import AdminRoutes from "./routes/AdminRoutes";
import HomePage from "./pages/UserPages/HomePage/HomePage";
import {ProtectAuth} from "./hoc/ProtectAuth";

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

                <Route path='/owner/*' element={
                    <ProtectOwner>
                        <OwnerRoutes />
                    </ProtectOwner>} />

                <Route path='/admin/*' element={
                    <ProtectAdmin>
                        <AdminRoutes/>
                    </ProtectAdmin>
                }/>

                <Route path='/*' element={
                    <ProtectAuth>
                        <PublicRoutes/>
                    </ProtectAuth>
                } />
            </Routes>
        </div>
    );
}

export default App;