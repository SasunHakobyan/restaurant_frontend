import React from 'react';
import styles from './RestaurantGrid.module.css';

import {IRestaurant} from "../../models/restaurant";
import RestaurantItem from "../RestaurantItem/RestaurantItem";

interface IProps {
    restaurants: IRestaurant[] | null
}

const RestaurantGrid = (props: IProps) => {
    return (
        <div className={styles.grid}>
            {props.restaurants?.map(restaurant => {
                return <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            })}
        </div>
    );
};

export default RestaurantGrid;