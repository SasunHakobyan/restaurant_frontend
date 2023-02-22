import axios from "axios";
import {IMeal} from "../models/meal";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/meal'
});

export const mealApi = {
    async getAll() {
        const authToken = localStorage.getItem('authToken');

        return instance.get('', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async getRestaurantMeals(restaurantId: number) {
        const authToken = localStorage.getItem('authToken');

        return instance.get(`?restaurantId=${restaurantId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async getOwnerMeals() {
        const authToken = localStorage.getItem('authToken');

        return instance.get('/owner', {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async addMeal(data: Omit<IMeal, 'id'>) {
        const authToken = localStorage.getItem('authToken');

        return instance.post('/owner', data,{
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    },

    async deleteMeal(mealId: number) {
        const authToken = localStorage.getItem('authToken');

        return instance.delete(`/${mealId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    }
}