import React from 'react';
import styles from './Product.module.css';

import productImg from '../../assets/product.jpg';

const Product = () => {
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

export default Product;