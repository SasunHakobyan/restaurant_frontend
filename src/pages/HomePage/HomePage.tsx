import React from 'react';
import MainContent from "../../layout/MainContent/MainContent";

import offerBanner from '../../assets/offer-banner.avif';
import styles from './HomePage.module.css';
import ItemList from "../../components/ItemList/ItemList";

const HomePage = () => {
    return (
        <MainContent>
            <div>
                <img className={styles.bannerImg} src={offerBanner}/>
            </div>
            <div>
                <h2 className={styles.dealText}>Deals</h2>
            </div>
            <ItemList/>
        </MainContent>
    );
};

export default HomePage;