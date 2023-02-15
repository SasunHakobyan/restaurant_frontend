import React from 'react';
import loader from '../../assets/preloader.gif';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <img className={styles.loader} src={loader}/>
        </div>
    );
};

export default Loader;