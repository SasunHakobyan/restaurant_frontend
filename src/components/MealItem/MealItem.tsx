import React from 'react';
import styles from './MealItem.module.css';

import {IMeal} from "../../models/meal";

interface IMealProps {
    meal: IMeal;
}

const MealItem = (props: IMealProps) => {
    return (
        <div className={styles.cardContainer}>
            <img alt='product' className={styles.productImg} src={props.meal.imgUrl} />
            <div className={styles.infoContainer}>
                <span className={styles.mealTitle}>{props.meal.name}</span>
                <span className={styles.mealDescription}>{props.meal.description}</span>
                <span className={styles.mealPrice}>{props.meal.price}$</span>
            </div>
        </div>
    );
};

export default MealItem;