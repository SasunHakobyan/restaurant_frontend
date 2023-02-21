import React from 'react';
import styles from './StatusModal.module.css';
import Modal from "../../../../layout/Modal/Modal";
import {useAppDispatch} from "../../../../store/store";
import {toggleStatusModal} from "../../../../store/reducers/orderReducer";

const StatusModal = () => {
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(toggleStatusModal())
    }

    return (
        <Modal closeModal={closeModal}>
            <div className={styles.container}>
                <div className={styles.statusItem}>Cancel</div>
                <div className={styles.statusItem}>Received</div>
            </div>
        </Modal>
    );
};

export default StatusModal;