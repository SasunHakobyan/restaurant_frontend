import axios from "axios";
import {IUserAuth} from "../models/user";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/auth'
});

export const userApi = {
    async signOwner({username, password}: IUserAuth) {
        const authToken = localStorage.getItem('authToken');

        return instance.post('/signOwner', {
            username: username,
            password: password
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
    },

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

        return instance.delete(`/${ownerId}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });
    }
}