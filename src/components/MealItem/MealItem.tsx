import React from 'react';
import styles from './MealItem.module.css';

import {IMeal} from "../../models/meal";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {addToCart} from "../../store/reducers/cartReducer";

interface IMealProps {
    meal: IMeal;
}

const MealItem = (props: IMealProps) => {
    const dispatch = useAppDispatch();

    const addToCartHandler = () => {
        const cartItem = {
            mealId: props.meal.id,
            imgUrl: props.meal.imgUrl,
            name: props.meal.name,
            price: props.meal.price,
            restaurantId: props.meal.restaurantId
        }

        dispatch(addToCart(cartItem));
    }

    return (
        <div className={styles.cardContainer}>
            <img alt='product' className={styles.productImg} src={props.meal.imgUrl} />
            <div className={styles.infoContainer}>
                <span className={styles.mealTitle}>{props.meal.name}</span>
                <span className={styles.mealDescription}>{props.meal.description}</span>
                <span className={styles.mealPrice}>{props.meal.price}$</span>
            </div>
            <div className={styles.cartBtn}>
                <button onClick={addToCartHandler}>Add to cart</button>
            </div>
        </div>
    );
};

export default MealItem;