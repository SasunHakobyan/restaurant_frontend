import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/auth'
});

export const userApi = {
    async getOwners() {
        const authToken = localStorage.getItem('authToken');

        return instance.get('/getOwners', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
    },

    async deleteOwner(ownerId: number) {
        const authToken = localStorage.getItem('authToken');

        return instance.delete('/', {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
    }
}