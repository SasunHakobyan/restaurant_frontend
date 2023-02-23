import React from 'react';
import Modal from "../../layout/Modal/Modal";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {closeModal} from "../../store/reducers/modalReducer";

import styles from './InfoModal.module.css';

const InfoModal = () => {
    const modalState = useAppSelector(state => state.modalReducer);
    const dispatch = useAppDispatch();

    const closeModalHandler = () => {
        dispatch(closeModal());
    }

    return (
        <Modal closeModal={closeModalHandler}>
            <div className={styles.modalMessageContainer}>
                <p>{modalState.modalMessage}</p>
            </div>
        </Modal>
    );
};

export default InfoModal;