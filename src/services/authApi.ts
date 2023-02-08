import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUser {
    username: string;
    password: string;
}

interface IAuthResponse {
    accessToken: string;
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/auth'}),
    endpoints: (build) => ({
        login: build.mutation<IAuthResponse, IUser> ({
            query: (data) => ({
                method: 'POST',
                url: '/signin',
                body: data
            }),
        })
    })
});

export const {useLoginMutation} = authApi;