import React from 'react';

import styles from './ItemList.module.css'
import Product from "../Product/Product";

const ItemList = () => {
    return (
        <div className={styles.listGrid}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default ItemList;