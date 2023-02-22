import React, {useEffect} from 'react';
import styles from './MealDetail.module.css';
import Modal from "../../layout/Modal/Modal";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {setMealDetailId} from "../../store/reducers/mealReducer";
import {fillMealDetail} from "../../store/thunk/meal/fillMealDetail";
import {addToCart} from "../../store/reducers/cartReducer";

type MealProps = {
    id: number
}

const MealDetail = (props: MealProps) => {
    const dispatch = useAppDispatch();
    const {mealDetail} = useAppSelector(state => state.mealReducer);

    const closeModal = () => {
        dispatch(setMealDetailId(undefined));
    }

    const addToCartHandler = () => {
        if (mealDetail) {
            const cartItem = {
                mealId: mealDetail.id,
                imgUrl: mealDetail.imgUrl,
                name: mealDetail.name,
                price: mealDetail.price,
                restaurantId: mealDetail.restaurantId
            }

            dispatch(addToCart(cartItem));
            dispatch(setMealDetailId(undefined))
        }
    }

    useEffect(() => {
        dispatch(fillMealDetail(props.id))
    }, [])

    return (
        <Modal customStyles={{width: "50%"}} closeModal={closeModal}>
            <div className={styles.mealContainer}>
                <div className={styles.imgContainer}>
                    <img src={mealDetail?.imgUrl}/>
                </div>
                <div className={styles.mainContainer}>
                    <h3 className={styles.mainHeader}>{mealDetail?.name}</h3>
                    <p className={styles.mainDescription}>{mealDetail?.description}</p>
                    <div className={styles.cartBtn}>
                        <button onClick={addToCartHandler}>Add to cart</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default MealDetail;