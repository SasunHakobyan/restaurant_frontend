import React from 'react';
import {IOrderMeals} from "../../models/order";

interface IOrderMealsProps {
    orderMeals: IOrderMeals[];
}

const OrderMeals = (props: IOrderMealsProps) => {
    return (
        <div>
            {props.orderMeals.map(orderMeal => {
                return <div key={orderMeal.mealId}>{orderMeal.amount}</div>
            })}
        </div>
    );
};

export default OrderMeals;