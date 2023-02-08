import React from 'react';
import MainContent from "../../layout/MainContent/MainContent";

import offerBanner from '../../assets/offer-banner.avif';
import styles from './HomePage.module.css';
import MealGrid from "../../components/MealGrid/MealGrid";

const HomePage = () => {
    return (
        <MainContent>
            <div>
                <img alt='banner' className={styles.bannerImg} src={offerBanner}/>
            </div>
            <div>
                <h2 className={styles.dealText}>Deals</h2>
            </div>
            <MealGrid/>
        </MainContent>
    );
};

export default HomePage;