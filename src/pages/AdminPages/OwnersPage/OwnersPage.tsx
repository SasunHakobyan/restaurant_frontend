import React, {useEffect} from 'react';
import MainContent from "../../../layout/MainContent/MainContent";
import styles from './OwnersPage.module.css';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillOwners} from "../../../store/thunk/admin/fillOwners";
import {deleteOwner} from "../../../store/thunk/admin/deleteOwner";
import {Link} from "react-router-dom";
import {modalSlice} from "../../../store/reducers/modalReducer";
import {adminSlice} from "../../../store/reducers/adminReducer";

const OwnersPage = () => {
    const {owners, infoMessage} = useAppSelector(state => state.adminReducer);
    const dispatch = useAppDispatch();

    const fetchOwners = async () => {
        dispatch(fillOwners());
    }

    const onDeleteClickHandler = (ownerId: number) => {
        dispatch(deleteOwner(ownerId))
    }

    useEffect(() => {
        if (infoMessage) {
            dispatch(modalSlice.actions.setShowMessage({toggle: true, message: infoMessage}))
            dispatch(adminSlice.actions.clearMessages());
        }

        fetchOwners();
    }, [infoMessage])

    return (
        <MainContent>
            <div className={styles.container}>
                <table className={styles.ownersTable}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        owners.map(owner => {
                            return (
                                <tr key={owner.id}>
                                    <td>{owner.id}</td>
                                    <td>{owner.username}</td>
                                    <td onClick={() => onDeleteClickHandler(owner.id)}>
                                        <button className={styles.deleteBtn}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <Link className={styles.addLink} to='/admin/add-owner'>Add Owner</Link>
            </div>
        </MainContent>
    );
};

export default OwnersPage;