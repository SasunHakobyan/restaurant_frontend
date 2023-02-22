import React from 'react';
import {IMeal} from "../../../models/meal";
import styles from './OrderMealItem.module.css';

type OrderMealItemProps = {
    meal: IMeal
}

const OrderMealItem = (props: OrderMealItemProps) => {
    return (
        <div className={styles.itemContainer}>
            <span>{props.meal.name}</span>
            <span className={styles.price}>({props.meal.price}AMD)</span>
        </div>
    );
};

export default OrderMealItem;