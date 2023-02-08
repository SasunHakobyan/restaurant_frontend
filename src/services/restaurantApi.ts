import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface IRestaurant {
    id: number;
    name: string;
    ownerId: number;
    description: string;
    imgUrl: string;
}

export const restaurantApi = createApi({
    reducerPath: 'restaurantApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/restaurant'}),
    endpoints: (build) => ({
        getRestaurants: build.query<IRestaurant[], void>({
            query: () => ''
        })
    })
});

export const {useGetRestaurantsQuery} = restaurantApi;