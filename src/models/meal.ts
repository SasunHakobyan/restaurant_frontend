import {IRestaurant} from "./restaurant";

export interface IMeal {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    restaurantId: number;
}