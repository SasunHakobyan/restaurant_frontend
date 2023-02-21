import axios from "axios";
import {IChangeStatus, IOrderData, Status} from "../models/order";

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
    },

    getOrders() {
        const authToken = localStorage.getItem('authToken');

        return instance.get('', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
    },

    changeStatus(options: IChangeStatus) {
        const authToken = localStorage.getItem('authToken');

        return instance.patch(`/${options.orderId}`, {
            status: options.status
        },{
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
    }
}