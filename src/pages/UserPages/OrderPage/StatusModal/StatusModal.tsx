import React from 'react';
import styles from './StatusModal.module.css';
import Modal from "../../../../layout/Modal/Modal";
import {useAppDispatch} from "../../../../store/store";
import {toggleStatusModal} from "../../../../store/reducers/orderReducer";
import {Status} from "../../../../models/order";
import {changeStatus} from "../../../../store/thunk/order/changeStatus";

const StatusModal = (props: {orderId: number}) => {
    const dispatch = useAppDispatch();

    const closeModal = () => {
        dispatch(toggleStatusModal(undefined))
    }

    const changeStatusHandler = (status: Status) => {
        dispatch(changeStatus({
            orderId: props.orderId,
            status: status
        }))
    }

    return (
        <Modal closeModal={closeModal}>
            <div className={styles.container}>
                <div onClick={() => changeStatusHandler(Status.Cancel)} className={styles.statusItem}>Cancel</div>
                <div onClick={() => changeStatusHandler(Status.Received)} className={styles.statusItem}>Received</div>
            </div>
        </Modal>
    );
};

export default StatusModal;