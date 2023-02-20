import React, {useEffect} from 'react';
import styles from './Cart.module.css';

import cartImg from '../../assets/logos/cart.png';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {addAmount, minusAmount, toggleCart} from "../../store/reducers/cartReducer";
import {ICart} from "../../models/cart";

const CartContent = () => {
    const dispatch = useAppDispatch();
    const {items} = useAppSelector(state => state.cartReducer);

    const plusAmountHandler = (mealId: number) => {
        dispatch(addAmount(mealId));
    }

    const minusAmountHandler = (mealId: number) => {
        dispatch(minusAmount(mealId));
    }

    return (
        <div className={styles.cart}>
            {items.map(item => {
                return (
                    <div className={styles.cartItemContainer}>
                        <div className={styles.cartImgContainer}>
                            <img src={item.img}/>
                        </div>
                        <div className={styles.cartItemInfoContainer}>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </div>
                        <div className={styles.cartItemControl}>
                            <div className={styles.cartAmountBtns}>
                                <button onClick={() => minusAmountHandler(item.mealId)}>-</button>
                                <span>{item.amount}</span>
                                <button onClick={() => plusAmountHandler(item.mealId)}>+</button>
                            </div>
                            <button>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const Cart = () => {
    const dispatch = useAppDispatch();
    const {cartToggle} = useAppSelector(state => state.cartReducer);

    const toggleBtnHandler = () => {
        dispatch(toggleCart());
    }

    return (
        <>
            {cartToggle && <CartContent/>}
            <div className={styles.btnContainer}>
                <button onClick={toggleBtnHandler} className={styles.cartBtn}><img className={styles.cartImg} src={cartImg} alt=""/></button>
            </div>
        </>
    );
};

/*
*
*
*
* */

export default Cart;