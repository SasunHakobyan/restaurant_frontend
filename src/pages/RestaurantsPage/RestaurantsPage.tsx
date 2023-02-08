import React from 'react';
import styles from './RestaurantPage.module.css';
import MainContent from "../../layout/MainContent/MainContent";
import RestaurantGrid from "../../components/RestaurantGrid/RestaurantGrid";

const RestaurantsPage = () => {
    return (
        <MainContent>
            <RestaurantGrid/>
        </MainContent>
    );
};

export default RestaurantsPage;