import React from 'react';
import styles from './MainContent.module.css';

type MainContentProps = {
    children: React.ReactNode
};

const MainContent = (props: MainContentProps) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
};

export default MainContent;