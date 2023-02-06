import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./layout/Navigation/Navigation";

import './app.css';
import HomePage from "./pages/HomePage/HomePage";

function App() {
    return (
        <div className='app'>
            <Navigation/>
            <Routes>
                <Route path='/' element={<HomePage/>} />
            </Routes>
            <div style={{flexGrow: 5}}>Orders</div>
        </div>
    );
}

export default App;