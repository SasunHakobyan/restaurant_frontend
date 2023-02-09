import React from 'react';

import styles from './MealGrid.module.css'
import MealItem from "../MealItem/MealItem";
import {IMeal} from "../../models/meal";

interface IMealProps {
    meals: IMeal[] | null
}

const MealGrid = (props: IMealProps) => {
    return (
        <div className={styles.listGrid}>
            {props.meals?.map(meal => {
                return <MealItem key={meal.id} meal={meal} />
            })}
        </div>
    );
};

export default MealGrid;