import React from 'react';
import styles from './Modal.module.css';

interface IModalProps {
    children: React.ReactNode
    closeModal: () => void
}

const Modal = (props: IModalProps) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={props.closeModal} className={styles.closeBtn}>&times;</button>
                {props.children}
            </div>

        </div>
    );
};

export default Modal;