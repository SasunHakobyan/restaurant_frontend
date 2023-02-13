import React from 'react';
import MainContent from "../../layout/MainContent/MainContent";
import {Map, Marker} from 'pigeon-maps';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <MainContent>
            <div>
                <div>
                    <Map height={200} defaultCenter={[40.184775, 44.507459]} defaultZoom={11}>
                        <Marker width={50} anchor={[44.507459, 44.507459]} />
                    </Map>
                </div>
                <div>
                    Orders
                </div>
            </div>
        </MainContent>
    );
};

export default HomePage;