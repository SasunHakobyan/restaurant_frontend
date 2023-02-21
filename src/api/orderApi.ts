import axios from "axios";
import {IOrderData} from "../models/order";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/order'
});


export const orderApi = {
    makeOrder(orderData: IOrderData) {
        const authToken = localStorage.getItem('authToken');

        return instance.post('', orderData, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
    }
}