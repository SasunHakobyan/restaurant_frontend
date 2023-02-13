import { IAddRestaurant } from './../models/restaurant';
import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/restaurant'
});

const authToken = localStorage.getItem('authToken');

export const restaurantApi = {
    async getAll() {
        return instance.get('', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async addRestaurant(data: IAddRestaurant) {
        return instance.post('', data, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
    },

    async findRestaurant(id: number) {
        return instance.get(`/${id}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    }
}