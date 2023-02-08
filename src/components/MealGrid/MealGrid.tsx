import React from 'react';

import styles from './MealGrid.module.css'
import MealItem from "../MealItem/MealItem";

const MealGrid = () => {
    return (
        <div className={styles.listGrid}>
            <MealItem/>
            <MealItem/>
            <MealItem/>
            <MealItem/>
            <MealItem/>
            <MealItem/>
        </div>
    );
};

export default MealGrid;