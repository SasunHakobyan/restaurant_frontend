import React from 'react';
import styles from './RestaurantGrid.module.css';
import RestaurantItem from "../RestaurantItem/RestaurantItem";

const RestaurantGrid = () => {
    return (
        <div className={styles.grid}>
            <RestaurantItem/>
            <RestaurantItem/>
            <RestaurantItem/>
            <RestaurantItem/>
            <RestaurantItem/>
        </div>
    );
};

export default RestaurantGrid;