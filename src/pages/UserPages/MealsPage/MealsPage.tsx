import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import MainContent from "../../../layout/MainContent/MainContent";
import MealGrid from "../../../components/MealGrid/MealGrid";
import {fillMeals} from "../../../store/thunk/meal/fillMeals";
import Loader from "../../../components/Loader/Loader";

const MealsPage = () => {
    const dispatch = useAppDispatch();
    const {meals, isLoading} = useAppSelector(state => state.mealReducer);

    useEffect(() => {
        dispatch(fillMeals())
    }, [])

    return (
        <MainContent>
            <div>
                {isLoading && <Loader/>}
                {!isLoading && <MealGrid meals={meals}/>}
            </div>
        </MainContent>
    );
};

export default MealsPage;