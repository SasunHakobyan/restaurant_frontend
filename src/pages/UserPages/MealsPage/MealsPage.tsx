import React, {useEffect} from 'react';
import styles from './MealsPage.module.css';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillMeals} from "../../../store/reducers/mealReducer";
import MainContent from "../../../layout/MainContent/MainContent";
import MealGrid from "../../../components/MealGrid/MealGrid";

const MealsPage = () => {
    const dispatch = useAppDispatch();
    const {meals} = useAppSelector(state => state.mealReducer);

    useEffect(() => {
        dispatch(fillMeals())
    }, [])

    return (
        <MainContent>
            <div>
                <h3 className={styles.restaurantName}>KFC</h3>
                <MealGrid meals={meals} />
            </div>
        </MainContent>
    );
};

export default MealsPage;