import React, {useEffect} from 'react';
import styles from './DeleteMeals.module.css';
import MainContent from "../../../layout/MainContent/MainContent";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillMeals} from "../../../store/thunk/meal/fillMeals";
import {deleteMeal} from "../../../store/thunk/meal/deleteMeal";
import {setShowMessage} from "../../../store/reducers/modalReducer";
import {clearMessages} from "../../../store/reducers/mealReducer";

const DeleteMealsPage = () => {
    const {meals, infoMessage} = useAppSelector(state => state.mealReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fillMeals());
    }, [meals]);

    useEffect(() => {
        if (infoMessage) {
            dispatch(setShowMessage({
                toggle: true,
                message: infoMessage
            }));
            dispatch(clearMessages());
        }
    }, [infoMessage])

    const deleteHandler = (id: number) => {
        dispatch(deleteMeal(id));
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
                        <th>Owner Id</th>
                        <th>Description</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        meals?.map(meal => {
                            return (
                                <tr key={meal.id}>
                                    <td>{meal.id}</td>
                                    <td>{meal.name}</td>
                                    <td><img src={meal.imgUrl}/></td>
                                    <td>{meal.price}</td>
                                    <td>{meal.description}</td>
                                    <td>
                                        <button
                                            onClick={() => deleteHandler(meal.id)}
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

export default DeleteMealsPage;