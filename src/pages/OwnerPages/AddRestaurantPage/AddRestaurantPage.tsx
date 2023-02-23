import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import MainContent from '../../../layout/MainContent/MainContent';
import {IRestaurant} from '../../../models/restaurant';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import styles from './AddRestaurant.module.css';
import {addRestaurant} from "../../../store/thunk/restaurant/addRestaurant";
import React, {useEffect} from "react";
import {clearMessages} from "../../../store/reducers/restaurantReducer";

const AddRestaurantPage = () => {
    const {infoMessage, savedSuccess} = useAppSelector(state => state.restaurantReducer);
    const dispatch = useAppDispatch();

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    useEffect(() => {
        if (infoMessage) {
            setTimeout(() => {dispatch(clearMessages())}, 2000);
        }
    }, [infoMessage])


    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const reqBody: Omit<IRestaurant, "id" | "ownerId"> = {
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
                {infoMessage && <div className={savedSuccess ? styles.successMsg : styles.errorMsg}>{infoMessage}</div>}
                <div className={styles.formControl}>
                    <label>Name</label>
                    <input {
                               ...register('name', {
                                   required: 'Name is required',
                                   minLength: {
                                       value: 4,
                                       message: 'Name length must be bigger or equal to 4'
                                   }
                               })
                           } />
                    {errors?.name && <span className={styles.errorMsg}>{errors?.name?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Description</label>
                    <textarea {
                                  ...register('description', {
                                      required: 'Description is required',
                                      minLength: {
                                          value: 4,
                                          message: 'Description length must be bigger or equal to 4'
                                      }
                                  })
                              } />
                    {errors?.description && <span className={styles.errorMsg}>{errors?.description?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Img Url</label>
                    <input {
                               ...register('imgUrl', {
                                   required: 'Image Url is required',
                               })
                           } />
                    {errors?.imgUrl && <span className={styles.errorMsg}>{errors?.imgUrl?.message?.toString()}</span>}
                </div>
                <input className={styles.submitBtn} type='submit' value='Add'/>
            </form>
        </MainContent>
    )
}

export default AddRestaurantPage;