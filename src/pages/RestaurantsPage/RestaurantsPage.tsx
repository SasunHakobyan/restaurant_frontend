import React, {useEffect} from 'react';
import MainContent from "../../layout/MainContent/MainContent";
import RestaurantGrid from "../../components/RestaurantGrid/RestaurantGrid";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {fillRestaurants} from "../../store/reducers/restaurantReducer";

const RestaurantsPage = () => {
    const dispatch = useAppDispatch();
    const {restaurants} = useAppSelector(state => state.restaurantReducer);

    useEffect(() => {
        dispatch(fillRestaurants())
    }, [])

    return (
        <MainContent>
            <RestaurantGrid restaurants={restaurants} />
        </MainContent>
    );
};

export default RestaurantsPage;