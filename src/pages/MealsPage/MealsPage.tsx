import React, {useEffect} from 'react';
import MealGrid from "../../components/MealGrid/MealGrid";
import MainContent from "../../layout/MainContent/MainContent";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {fillMeals} from "../../store/reducers/mealReducer";
import styles from './MealsPage.module.css';

const MealsPage = () => {
    const dispatch = useAppDispatch();
    const {meals} = useAppSelector(state => state.mealReducer);

    useEffect(() => {
        dispatch(fillMeals())
    }, [])

    return (
        <MainContent>
            <div>
                <div className={styles.restaurantNameContainer}>
                    <h3 className={styles.restaurantName}>KFC</h3>
                </div>
                <MealGrid meals={meals} />
            </div>
        </MainContent>
    );
};

export default MealsPage;