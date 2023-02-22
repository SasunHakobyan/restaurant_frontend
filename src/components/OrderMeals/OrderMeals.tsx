import React, {useEffect} from 'react';
import {IOrderMeal} from "../../models/order";
import Modal from "../../layout/Modal/Modal";
import {useAppDispatch} from "../../store/store";
import {fillMealsByIds} from "../../store/thunk/meal/fillMealsByIds";

interface IOrderMealsProps {
    orderMeals: IOrderMeal[];
}

const OrderMeals = (props: IOrderMealsProps) => {
    const mealIds = props.orderMeals.map(orderMeal => Number(orderMeal.mealId));

    const dispatch = useAppDispatch();

    const closeModal = () => {

    }

    useEffect(() => {
        dispatch(fillMealsByIds(mealIds))
    }, [mealIds])

    return (
        <div>asd</div>
    );
};

export default OrderMeals;