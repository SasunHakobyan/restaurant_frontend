import React from 'react';
import styles from './RestaurantGrid.module.css';
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import {IRestaurant} from "../../models/restaurant";

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