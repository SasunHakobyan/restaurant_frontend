import React, {useEffect} from 'react';
import MainContent from "../../../layout/MainContent/MainContent";
import styles from './AddMealPage.module.css'
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillOwnerRestaurants} from "../../../store/thunk/restaurant/fillOwnerRestaurants";

const AddMealPage = () => {
    const dispatch = useAppDispatch();
    const {restaurants} = useAppSelector(state => state.restaurantReducer);

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    useEffect(() => {
        dispatch(fillOwnerRestaurants());
    }, [])

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)
    }

    return (
        <MainContent>
            <h3>Add Meal</h3>
            <form className={styles.form} onSubmit={handleSubmit(formSubmitHandler)}>
                <div className={styles.formControl}>
                    <label>Name</label>
                    <input {
                               ...register('name', {
                                   required: 'Name is required',
                                   minLength: 4
                               })
                           } />
                    {errors?.name && <span className={styles.errorMsg}>{errors?.name?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Description</label>
                    <textarea {
                                  ...register('description', {
                                      required: 'Description is required',
                                      minLength: 4
                                  })
                              } />
                </div>
                <div className={styles.formControl}>
                    <label>Img Url</label>
                    <input {
                               ...register('imgUrl', {
                                   required: 'imgUrl is required',
                               })
                           } />
                </div>
                <div className={styles.formControl}>
                    <label>Restaurant</label>
                    <select {
                               ...register('restaurantId', {
                                   required: 'Please choose restaurant',
                               })
                            }>
                        {restaurants?.map(restaurant => {
                            return <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
                        })}
                    </select>
                </div>
                <input className={styles.submitBtn} type='submit' value='Add'/>
            </form>
        </MainContent>
    );
};

export default AddMealPage;