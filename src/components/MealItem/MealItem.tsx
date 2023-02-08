import React from 'react';
import styles from './MealItem.module.css';

import productImg from '../../assets/product.jpg';

const MealItem = () => {
    return (
        <div className={styles.cardContainer}>
            <img alt='product' className={styles.productImg} src={productImg} />
            <div className={styles.mainInfoContainer}>
                <span className={styles.productTitle}>Burger Mozza XL</span>
                <span className={styles.productPrice}>$39</span>
            </div>
            <div className={styles.description}>
                Description
            </div>
        </div>
    );
};

export default MealItem;