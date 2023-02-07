import React from 'react';
import styles from './Modal.module.css';

interface IModalProps {
    toggleModal: (showModal: boolean) => void;
    children: React.ReactNode
}

const Modal = (props: IModalProps) => {
    const closeModal = () => props.toggleModal(false);

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button onClick={closeModal} className={styles.closeBtn}>&times;</button>
                {props.children}
            </div>

        </div>
    );
};

export default Modal;