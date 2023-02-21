import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillOwnerMeals} from "../../../store/thunk/meal/fillOwnerMeals";
import styles from './OwnerMealsPage.module.css';
import MainContent from "../../../layout/MainContent/MainContent";
import {deleteMeal} from "../../../store/thunk/meal/deleteMeal";
import {setShowMessage} from "../../../store/reducers/modalReducer";
import {clearMessages} from "../../../store/reducers/mealReducer";

const OwnerMealsPage = () => {
    const {meals, infoMessage} = useAppSelector(state => state.mealReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fillOwnerMeals());

        if (infoMessage) {
            dispatch(setShowMessage({toggle: true, message: infoMessage}));
            dispatch(clearMessages());
        }
    }, [meals])

    const deleteMealHandler = (id: number) => {
        dispatch(deleteMeal(id));
    }

    return (
        <MainContent>
            <div className={styles.container}>
                <table className={styles.ownersTable}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Restaurant ID</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        meals?.map(meal => {
                            return (
                                <tr key={meal.id}>
                                    <td>{meal.id}</td>
                                    <td><img src={meal.imgUrl}/></td>
                                    <td>{meal.name}</td>
                                    <td>{meal.description}</td>
                                    <td>{meal.price}</td>
                                    <td>{meal.restaurantId}</td>
                                    <td><button>Edit</button></td>
                                    <td><button className={styles.deleteBtn} onClick={() => deleteMealHandler(meal.id)}>Delete</button></td>
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

export default OwnerMealsPage;