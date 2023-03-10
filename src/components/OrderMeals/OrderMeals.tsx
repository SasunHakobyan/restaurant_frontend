import React, {useEffect} from 'react';
import {IOrderMeal} from "../../models/order";
import styles from './OrderMeals.module.css';
import {useAppDispatch, useAppSelector} from "../../store/store";
import OrderMealItem from "./OrderMealItem/OrderMealItem";

interface IOrderMealsProps {
    orderMeals: IOrderMeal[];
}

const OrderMeals = (props: IOrderMealsProps) => {
    const {meals} = useAppSelector(state => state.mealReducer);
    const mealIds = props.orderMeals.map(orderMeal => Number(orderMeal.mealId));

    const dispatch = useAppDispatch();

    useEffect(() => {
        // dispatch(fillMealsByIds(mealIds))
    }, [mealIds])

    return (
        <div className={styles.orderMealsContainer}>
            {meals?.map(meal => {
                return <OrderMealItem key={meal.id} meal={meal}/>
            })}
        </div>
    );
};

export default OrderMeals;