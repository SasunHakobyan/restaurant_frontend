import React from 'react';
import styles from './Modal.module.css';

interface IModalProps {
    children: React.ReactNode
    closeModal: () => void
    customStyles?: React.CSSProperties
}

const Modal = (props: IModalProps) => {
    const outsideClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget)
    }

    return (
        <div onClick={outsideClickHandler} className={styles.modal}>
            <div style={props.customStyles && props.customStyles} className={styles.modalContent}>
                <button onClick={props.closeModal} className={styles.closeBtn}>&times;</button>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;