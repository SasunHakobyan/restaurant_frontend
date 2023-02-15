import React from 'react';
import styles from './AdminHomePage.module.css';
import {Link} from "react-router-dom";

const AdminHomePage = () => {
    return (
        <div className={styles.container}>
            <Link to='' className={styles.manageBtn}>All Owners</Link>
            <Link to='' className={styles.manageBtn}>Delete Restaurant</Link>
            <Link to='' className={styles.manageBtn}>Delete Meal</Link>
        </div>
    );
};

export default AdminHomePage;