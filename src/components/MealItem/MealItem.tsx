import React from 'react';
import styles from './MealItem.module.css';

import productImg from '../../assets/product.jpg';
import {IMeal} from "../../models/meal";

interface IMealProps {
    meal: IMeal;
}

const MealItem = (props: IMealProps) => {
    return (
        <div className={styles.cardContainer}>
            <img alt='product' className={styles.productImg} src={props.meal.imgUrl} />
            <div className={styles.mainInfoContainer}>
                <span className={styles.productTitle}>{props.meal.name}</span>
                <span className={styles.productPrice}>${props.meal.price}</span>
            </div>
            <div className={styles.description}>
                {props.meal.description}
            </div>
        </div>
    );
};

export default MealItem;