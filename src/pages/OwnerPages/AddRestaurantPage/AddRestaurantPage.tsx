import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import MainContent from '../../../layout/MainContent/MainContent';
import {IAddRestaurant} from '../../../models/restaurant';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import styles from './AddRestaurant.module.css';
import {useNavigate} from "react-router-dom";
import {addRestaurant} from "../../../store/thunk/restaurant/addRestaurant";
import React from "react";

const AddRestaurantPage = () => {
    const restaurantState = useAppSelector(state => state.restaurantReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    if (restaurantState.saved) {
        navigate('/');
    }

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const reqBody: IAddRestaurant = {
            name: data.name,
            description: data.description,
            imgUrl: data.imgUrl
        };

        dispatch(addRestaurant(reqBody));
    }

    return (
        <MainContent>
            <h3>Add Restaurant</h3>
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
                <input className={styles.submitBtn} type='submit' value='Add'/>
            </form>
        </MainContent>
    )
}

export default AddRestaurantPage;