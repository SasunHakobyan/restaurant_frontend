import { IAddRestaurant } from './../models/restaurant';
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/restaurant'
});

export const restaurantApi = {
    async getAll() {
        const authToken = localStorage.getItem('authToken');

        return instance.get('', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async addRestaurant(data: IAddRestaurant) {
        const authToken = localStorage.getItem('authToken');

        return instance.post('', data, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
    }
}