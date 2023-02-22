import React from 'react';

import styles from './MealGrid.module.css'
import MealItem from "../MealItem/MealItem";
import {IMeal} from "../../models/meal";
import {useAppSelector} from "../../store/store";
import MealDetail from "../MealDetail/MealDetail";

interface IMealProps {
    meals: IMeal[] | null
}

const MealGrid = (props: IMealProps) => {
    const {mealDetailId} = useAppSelector(state => state.mealReducer);

    return (
        <div className={styles.listGrid}>
            {mealDetailId && <MealDetail id={mealDetailId}/>}
            {props.meals?.length === 0 && <h4>Meals not found</h4>}
            {props.meals?.map(meal => {
                return <MealItem key={meal.id} meal={meal} />
            })}
        </div>
    );
};

export default MealGrid;