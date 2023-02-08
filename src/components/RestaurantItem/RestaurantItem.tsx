import React from 'react';
import styles from './RestaurantItem.module.css';
import restaurantImg from '../../assets/restaurantItem.webp';

const RestaurantItem = () => {
    return (
        <div className={styles.itemContainer}>
            <div>
                <img className={styles.restImg} src={restaurantImg} />
            </div>
            <div className={styles.infoContainer}>
                <h3>7-Eleven (1602 S. Bumby Ave.)</h3>
                <p>
                    Affordable Lake Terrace spot, offering Energy, Chips, Cookies & Bakery, Ben & Jerry's, Domestic and more.
                </p>
            </div>
        </div>
    );
};

export default RestaurantItem;