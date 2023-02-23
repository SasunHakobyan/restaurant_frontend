import {useAppDispatch, useAppSelector} from "../../../store/store";
import {addAmount, clearCart, deleteItem, minusAmount} from "../../../store/reducers/cartReducer";
import styles from "../Cart.module.css";
import React, {useEffect} from "react";
import {IOrderData} from "../../../models/order";
import {makeOrder} from "../../../store/thunk/order/makeOrder";
import {setShowMessage} from "../../../store/reducers/modalReducer";
import {clearOrderMessages} from "../../../store/reducers/orderReducer";

import plusPng from '../../../assets/logos/plus.png';
import minusPng from '../../../assets/logos/minus.png';

const CartContent = () => {
    const dispatch = useAppDispatch();
    const {items, restaurantId, totalAmount} = useAppSelector(state => state.cartReducer);
    const {createdSuccess, infoMessage} = useAppSelector(state => state.orderReducer);

    const plusAmountHandler = (mealId: number) => {
        dispatch(addAmount(mealId));
    }

    const minusAmountHandler = (mealId: number) => {
        dispatch(minusAmount(mealId));
    }

    const deleteItemHandler = (mealId: number) => {
        dispatch(deleteItem(mealId));
    }

    const makeOrderHandler = () => {
        if (restaurantId && items.length > 0) {
            const orderData: IOrderData = {
                restaurantId: restaurantId,
                orderMeals: items
            }

            dispatch(makeOrder(orderData));
        }
    }

    useEffect(() => {
        if (createdSuccess && infoMessage) {
            dispatch(setShowMessage({toggle: true, message: infoMessage}))
            dispatch(clearCart());
            dispatch(clearOrderMessages());
        }
    }, [createdSuccess])

    return (
        <>
            <div className={styles.cart}>
                {items.map(item => {
                    return (
                        <div key={item.mealId} className={styles.cartItemContainer}>
                            <div className={styles.cartImgContainer}>
                                <img src={item.img}/>
                                <button className={styles.deleteBtn} onClick={() => deleteItemHandler(item.mealId)}>X</button>
                            </div>
                            <div className={styles.cartItemInfoContainer}>
                                <span>{item.name}</span>
                            </div>
                            <div className={styles.cartItemControl}>
                                <div className={styles.cartAmountBtns}>
                                    <button className={styles.amountBtn} onClick={() => minusAmountHandler(item.mealId)}>
                                        <img src={minusPng}/>
                                    </button>
                                    <span>{item.amount}</span>
                                    <button className={styles.amountBtn} onClick={() => plusAmountHandler(item.mealId)}>
                                        <img src={plusPng}/>
                                    </button>
                                </div>
                                <span className={styles.itemPrice}>{item.price * item.amount}$</span>
                            </div>
                        </div>
                    )
                })}
                <div>
                    {items.length !== 0 &&
                        <h4>Total Amount: {totalAmount}</h4>
                    }
                </div>
                <div>
                    {items.length > 0 &&
                        <button onClick={makeOrderHandler} className={styles.makeOrderBtn}>Make Order</button>
                    }
                    {items.length === 0 && <div>No meals in cart</div>}
                </div>
            </div>
        </>
    )
}

export default CartContent;