import React from 'react';
import styles from './Loader.module.css';
import loader from '../../assets/loader.gif'

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <img className={styles.loader} src={loader}/>
        </div>
    );
};

export default Loader;