import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./layout/Navigation/Navigation";

import './app.css';
import HomePage from "./pages/HomePage/HomePage";
import AuthModal from "./components/AuthModal/AuthModal";

function App() {
    const [isModalShow, toggleModal] = useState(false);

    return (
        <div className='app'>
            {isModalShow && <AuthModal toggleModal={toggleModal} />}
            <Navigation toggleModal={toggleModal} />
            <Routes>
                <Route path='/' element={<HomePage/>} />
            </Routes>
            <div style={{width: '25%'}}>Orders</div>
        </div>
    );
}

export default App;