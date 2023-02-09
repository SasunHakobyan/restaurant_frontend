import React, {useEffect} from 'react';
import MealGrid from "../../components/MealGrid/MealGrid";
import MainContent from "../../layout/MainContent/MainContent";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {fillMeals} from "../../store/reducers/mealReducer";

const MealsPage = () => {
    const dispatch = useAppDispatch();
    const {meals} = useAppSelector(state => state.mealReducer);

    useEffect(() => {
        dispatch(fillMeals())
    }, [])

    return (
        <MainContent>
            <div>
                <h3>KFC</h3>
                <MealGrid meals={meals} />
            </div>
        </MainContent>
    );
};

export default MealsPage;