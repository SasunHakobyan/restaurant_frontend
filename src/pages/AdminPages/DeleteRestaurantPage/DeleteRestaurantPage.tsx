import React, {useEffect} from 'react';
import styles from './DeleteRestaurantPage.module.css';
import MainContent from "../../../layout/MainContent/MainContent";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillRestaurants} from "../../../store/thunk/restaurant/fillRestaurants";
import {deleteRestaurant} from "../../../store/thunk/restaurant/deleteRestaurant";
import {modalSlice} from "../../../store/reducers/modalReducer";
import {restaurantSlice} from "../../../store/reducers/restaurantReducer";

const DeleteRestaurantPage = () => {
    const dispatch = useAppDispatch();
    const {restaurants, infoMessage} = useAppSelector(state => state.restaurantReducer);

    useEffect(() => {
        dispatch(fillRestaurants());
    }, [restaurants])

    const onDeleteHandler = (id: number) => {
        dispatch(deleteRestaurant(id));
    }

    useEffect(() => {
        if (infoMessage) {
            dispatch(modalSlice.actions.setShowMessage({
                toggle: true,
                message: infoMessage
            }));
            dispatch(restaurantSlice.actions.clearMessages());
        }
    }, [infoMessage])

    return (
        <MainContent>
            <div className={styles.container}>
                <table className={styles.ownersTable}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Img</th>
                        <th>Owner Id</th>
                        <th>Description</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        restaurants?.map(restaurant => {
                            return (
                                <tr key={restaurant.id}>
                                    <td>{restaurant.id}</td>
                                    <td>{restaurant.name}</td>
                                    <td><img src={restaurant.imgUrl}/></td>
                                    <td>{restaurant.ownerId}</td>
                                    <td>{restaurant.description}</td>
                                    <td>
                                        <button
                                            onClick={() => onDeleteHandler(restaurant.id)}
                                            className={styles.deleteBtn}>
                                            Delete
                                        </button>
                                    </td>
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

export default DeleteRestaurantPage;