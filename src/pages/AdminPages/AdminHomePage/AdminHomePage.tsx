import React from 'react';
import styles from './AdminHomePage.module.css';
import {Link} from "react-router-dom";
import MainContent from "../../../layout/MainContent/MainContent";

const AdminHomePage = () => {
    return (
        <MainContent>
            <div className={styles.container}>
                <Link to='/admin/owners' className={styles.manageBtn}>All Owners</Link>
                <Link to='' className={styles.manageBtn}>Delete Restaurant</Link>
                <Link to='' className={styles.manageBtn}>Delete Meal</Link>
            </div>
        </MainContent>
    );
};

export default AdminHomePage;