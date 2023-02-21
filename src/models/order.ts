export enum Status {
    Placed = "Placed",
    Cancel = "Canceled",
    Received = "Received"
}

export interface IOrder {
    id: number;
    restaurantId: number;
    totalAmount: number;
    orderMeals: IOrderMeals[];
    status: Status.Placed;
    createdAt: Date;
}

export interface IOrderMeals {
    mealId: number;
    amount: number;
}

export interface IOrderData {
    restaurantId: number;
    orderMeals: IOrderMeals[];
}

export interface IChangeStatus {
    orderId: number;
    status: Status;
}