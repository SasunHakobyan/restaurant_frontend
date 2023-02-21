import React, {useEffect} from 'react';
import MainContent from "../../../layout/MainContent/MainContent";
import styles from './OwnerRestaurantsPage.module.css';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillOwnerRestaurants} from "../../../store/thunk/restaurant/fillOwnerRestaurants";

const OwnerRestaurantsPage = () => {
    const dispatch = useAppDispatch();
    const {restaurants} = useAppSelector(state => state.restaurantReducer);

    useEffect(() => {
        dispatch(fillOwnerRestaurants());
    }, [restaurants])

    return (
        <MainContent>
            <div className={styles.container}>
                <table className={styles.ownersTable}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Img</th>
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
                                    <td>{restaurant.description}</td>
                                    <td>
                                        <button
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
    )
};

export default OwnerRestaurantsPage;