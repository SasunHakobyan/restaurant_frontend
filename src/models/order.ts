import {IRestaurant} from "./restaurant";

export enum Status {
    Placed = "Placed",
    Cancel = "Canceled",
    Received = "Received"
}

export interface IOrder {
    id: number;
    restaurant: IRestaurant;
    totalAmount: number;
    orderMeals: IOrderMeal[];
    status: Status.Placed;
    createdAt: Date;
}

export interface IOrderMeal {
    mealId: number;
    amount: number;
}

export interface IOrderData {
    restaurantId: number;
    orderMeals: IOrderMeal[];
}

export interface IChangeStatus {
    orderId: number;
    status: Status;
}