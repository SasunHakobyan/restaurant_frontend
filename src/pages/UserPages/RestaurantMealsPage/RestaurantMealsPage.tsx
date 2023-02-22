import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillRestaurantMeals} from "../../../store/thunk/meal/fillRestaurantMeals";
import {useParams} from "react-router-dom";
import MealGrid from "../../../components/MealGrid/MealGrid";
import MainContent from "../../../layout/MainContent/MainContent";

type RouteParams = {
    id: string
}

const RestaurantMealsPage = () => {
    const {id} = useParams<RouteParams>();
    const dispatch = useAppDispatch();
    const {meals} = useAppSelector(state => state.mealReducer);

    useEffect(() => {
        dispatch(fillRestaurantMeals(Number(id)))
    }, [])

    return (
        <MainContent>
            <div>
                <MealGrid meals={meals}/>
            </div>
        </MainContent>
    );
};

export default RestaurantMealsPage;