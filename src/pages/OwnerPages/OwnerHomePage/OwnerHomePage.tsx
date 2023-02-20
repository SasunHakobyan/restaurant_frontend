import React from 'react';
import styles from './OwnerHomePage.module.css';
import {Link} from "react-router-dom";
import MainContent from "../../../layout/MainContent/MainContent";

const OwnerHomePage = () => {
    return (
        <MainContent>
            <div className={styles.container}>
                <Link to='/owner/restaurants' className={styles.manageBtn}>Restaurants</Link>
                <Link to='/owner/add-restaurant' className={styles.manageBtn}>Add Restaurant</Link>
                <Link to='/owner/meals' className={styles.manageBtn}>Meals</Link>
                <Link to='/owner/add-meal' className={styles.manageBtn}>Add Meal</Link>
            </div>
        </MainContent>
    );
};

export default OwnerHomePage;