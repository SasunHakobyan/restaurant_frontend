import React from 'react';
import {Route, Routes} from "react-router-dom";

import Navigation from "./layout/Navigation/Navigation";
import MainContent from "./layout/MainContent/MainContent";

import './app.css';

function App() {
    return (
        <div className='app'>
            <Navigation/>
            <Routes>
                <Route path='/' element={<MainContent/>} />
            </Routes>
            <div style={{flexGrow: 5}}>Orders</div>
        </div>
    );
}

export default App;