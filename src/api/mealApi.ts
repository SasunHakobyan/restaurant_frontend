import axios from "axios";

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

    async deleteMeal(mealId: number) {
        const authToken = localStorage.getItem('authToken');

        return instance.delete(`/${mealId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
    }
}