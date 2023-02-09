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
    }
}