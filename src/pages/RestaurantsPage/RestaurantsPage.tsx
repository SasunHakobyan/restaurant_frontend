import React from 'react';
import styles from './RestaurantPage.module.css';
import MainContent from "../../layout/MainContent/MainContent";
import RestaurantGrid from "../../components/RestaurantGrid/RestaurantGrid";
import { useGetRestaurantsQuery } from '../../services/restaurantApi';

const RestaurantsPage = () => {
    const {data, error, isLoading} = useGetRestaurantsQuery();
    console.log(data);

    return (
        <MainContent>
            <RestaurantGrid/>
        </MainContent>
    );
};

export default RestaurantsPage;