import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillRestaurants} from "../../../store/thunk/restaurant/fillRestaurants";

import Loader from "../../../components/Loader/Loader";
import MainContent from "../../../layout/MainContent/MainContent";
import RestaurantGrid from "../../../components/RestaurantGrid/RestaurantGrid";

const RestaurantsPage = () => {
    const dispatch = useAppDispatch();
    const {restaurants, isLoading} = useAppSelector(state => state.restaurantReducer);

    useEffect(() => {
        dispatch(fillRestaurants())
    }, [])

    return (
        <MainContent>
            {isLoading && <Loader/>}
            {!isLoading && <RestaurantGrid restaurants={restaurants} />}
        </MainContent>
    );
};

export default RestaurantsPage;