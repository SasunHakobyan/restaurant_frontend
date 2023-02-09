import axios from "axios";
import {IUserAuth} from "../models/user";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/auth'
});

export const authApi = {
    async login(data: IUserAuth) {
        return instance.post('/signin', data);
    }
}