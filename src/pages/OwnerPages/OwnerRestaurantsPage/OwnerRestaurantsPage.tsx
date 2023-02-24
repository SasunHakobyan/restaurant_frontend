import React, {useEffect} from 'react';
import MainContent from "../../../layout/MainContent/MainContent";
import styles from './OwnerRestaurantsPage.module.css';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillOwnerRestaurants} from "../../../store/thunk/restaurant/fillOwnerRestaurants";
import {deleteRestaurant} from "../../../store/thunk/restaurant/deleteRestaurant";
import {setShowMessage} from "../../../store/reducers/modalReducer";
import {clearMessages} from "../../../store/reducers/restaurantReducer";
import {Link} from "react-router-dom";

const OwnerRestaurantsPage = () => {
    const dispatch = useAppDispatch();
    const {restaurants, infoMessage} = useAppSelector(state => state.restaurantReducer);

    useEffect(() => {
        if (infoMessage) {
            dispatch(setShowMessage({toggle: true, message: infoMessage}));
            dispatch(clearMessages());
        }

        dispatch(fillOwnerRestaurants());
    }, [restaurants])

    const deleteRestaurantHandler = (id: number) => {
        dispatch(deleteRestaurant(id))
    }

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
                        <th>Edit</th>
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
                                        <Link to={`/owner/edit-restaurant/${restaurant.id}`} className={styles.editBtn}>
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => deleteRestaurantHandler(restaurant.id)}
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