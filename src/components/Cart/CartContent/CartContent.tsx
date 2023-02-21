import {useAppDispatch, useAppSelector} from "../../../store/store";
import {addAmount, clearCart, deleteItem, minusAmount} from "../../../store/reducers/cartReducer";
import styles from "../Cart.module.css";
import React, {useEffect} from "react";
import {IOrderData} from "../../../models/order";
import {makeOrder} from "../../../store/thunk/order/makeOrder";
import InfoModal from "../../InfoModal/InfoModal";
import {modalSlice} from "../../../store/reducers/modalReducer";
import {clearOrderMessages} from "../../../store/reducers/orderReducer";

const CartContent = () => {
    const dispatch = useAppDispatch();
    const {items, restaurantId} = useAppSelector(state => state.cartReducer);
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
        if (restaurantId) {
            const orderData: IOrderData = {
                restaurantId: restaurantId,
                orderMeals: items
            }

            dispatch(makeOrder(orderData));
        }
    }

    useEffect(() => {
        if (createdSuccess && infoMessage) {
            dispatch(modalSlice.actions.setShowMessage({toggle: true, message: infoMessage}))
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
                    <button onClick={makeOrderHandler} className={styles.makeOrderBtn}>Make Order</button>
                </div>
            </div>
        </>
    )
}

export default CartContent;