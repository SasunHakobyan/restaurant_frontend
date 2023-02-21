import {useAppDispatch, useAppSelector} from "../../../store/store";
import {addAmount, deleteItem, minusAmount} from "../../../store/reducers/cartReducer";
import styles from "../Cart.module.css";
import React from "react";

const CartContent = () => {
    const dispatch = useAppDispatch();
    const {items} = useAppSelector(state => state.cartReducer);

    const plusAmountHandler = (mealId: number) => {
        dispatch(addAmount(mealId));
    }

    const minusAmountHandler = (mealId: number) => {
        dispatch(minusAmount(mealId));
    }

    const deleteItemHandler = (mealId: number) => {
        dispatch(deleteItem(mealId));
    }

    return (
        <>
            <div className={styles.cart}>
                {items.map(item => {
                    return (
                        <div key={item.mealId} className={styles.cartItemContainer}>
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
                                <button onClick={() => deleteItemHandler(item.mealId)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
                <div>
                    <button className={styles.makeOrderBtn}>Make Order</button>
                </div>
            </div>
        </>
    )
}

export default CartContent;