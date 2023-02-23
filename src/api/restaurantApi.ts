import { IRestaurant } from '../models/restaurant';
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

    async getOwnerRestaurants() {
        const authToken = localStorage.getItem('authToken');

        return instance.get('/owner', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async addRestaurant(data: Omit<IRestaurant, "id" | "ownerId">) {
        const authToken = localStorage.getItem('authToken');

        return instance.post('', data, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        })
    },

    async editRestaurant(restaurantId: number, data: Omit<IRestaurant, "id" | "ownerId">) {
        const authToken = localStorage.getItem('authToken');

        return instance.patch(`/${restaurantId}`, data, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async findRestaurant(id: number) {
        const authToken = localStorage.getItem('authToken');

        return instance.get(`/${id}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async deleteRestaurant(id: number) {
        const authToken = localStorage.getItem('authToken');

        return instance.delete(`/${id}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    }
}