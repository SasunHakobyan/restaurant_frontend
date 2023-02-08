import React from 'react';
import styles from './MealsPage.module.css';
import MealGrid from "../../components/MealGrid/MealGrid";
import MainContent from "../../layout/MainContent/MainContent";

const MealsPage = () => {
    return (
        <MainContent>
            <div>
                <h3>KFC</h3>
                <MealGrid/>
            </div>
            <div>
                <h3>Walgreens</h3>
                <MealGrid/>
            </div>
            <div>
                <h3>Taco Bell</h3>
                <MealGrid/>
            </div>
        </MainContent>
    );
};

export default MealsPage;