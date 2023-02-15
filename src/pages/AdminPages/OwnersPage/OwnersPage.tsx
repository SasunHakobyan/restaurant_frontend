import React, {useEffect} from 'react';
import MainContent from "../../../layout/MainContent/MainContent";
import styles from './OwnersPage.module.css';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillOwners} from "../../../store/thunk/admin/fillOwners";

const OwnersPage = () => {
    const {owners} = useAppSelector(state => state.adminReducer);
    const dispatch = useAppDispatch();

    const fetchOwners = async () => {
        dispatch(fillOwners());
    }

    const onDeleteClickHandler = (ownerId: number) => {

    }

    useEffect(() => {
        fetchOwners();
    }, [])

    return (
        <MainContent>
            <div className={styles.container}>
                <table className={styles.ownersTable}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Edit</th>
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
                                    <td>Edit</td>
                                    <td onClick={() => onDeleteClickHandler(owner.id)}>Delete</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </MainContent>
    );
};

export default OwnersPage;