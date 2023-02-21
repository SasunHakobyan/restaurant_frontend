import React, {useEffect} from 'react';
import styles from './Cart.module.css';

import cartImg from '../../assets/logos/cart.png';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {toggleCart} from "../../store/reducers/cartReducer";
import CartContent from "./CartContent/CartContent";

const Cart = () => {
    const dispatch = useAppDispatch();
    const {cartToggle, itemCount} = useAppSelector(state => state.cartReducer);

    const toggleBtnHandler = () => {
        dispatch(toggleCart());
    }

    return (
        <>
            {cartToggle && <CartContent/>}
            <div className={styles.btnContainer}>
                <button onClick={toggleBtnHandler} className={styles.cartBtn}>
                    <img className={styles.cartImg} src={cartImg} alt=""/>
                    <span className={styles.itemCount}>{itemCount}</span>
                </button>
            </div>
        </>
    );
};

export default Cart;