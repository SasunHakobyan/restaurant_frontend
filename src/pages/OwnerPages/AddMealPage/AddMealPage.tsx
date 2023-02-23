import React, {useEffect} from 'react';
import MainContent from "../../../layout/MainContent/MainContent";
import styles from './AddMealPage.module.css'
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {fillOwnerRestaurants} from "../../../store/thunk/restaurant/fillOwnerRestaurants";
import {addMeal} from "../../../store/thunk/meal/addMeal";
import {IMeal} from "../../../models/meal";
import {clearMessages} from "../../../store/reducers/mealReducer";

const AddMealPage = () => {
    const dispatch = useAppDispatch();
    const {infoMessage, successSave} = useAppSelector(state => state.mealReducer);
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

    useEffect(() => {
        if (infoMessage) {
            setTimeout(() => {dispatch(clearMessages())}, 2000);
        }
    }, [infoMessage])

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const mealData:Omit<IMeal, "id"> = {
            name: data.name,
            description: data.description,
            imgUrl: data.imgUrl,
            price: Number(data.price),
            restaurantId: Number(data.restaurantId)
        }

        dispatch(addMeal(mealData));
    }

    return (
        <MainContent>
            <h3>Add Meal</h3>
            <form className={styles.form} onSubmit={handleSubmit(formSubmitHandler)}>
                {infoMessage && <div className={successSave ? styles.successMsg : styles.errorMsg}>{infoMessage}</div>}
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
                <div className={styles.formControl}>
                    <label>Price</label>
                    <input type='number' {
                                  ...register('price', {
                                      required: 'Price is required',
                                      min: {
                                          value: 0,
                                          message: 'Price cannot be negative'
                                      }
                                  })
                              } />
                    {errors?.price && <span className={styles.errorMsg}>{errors?.price?.message?.toString()}</span>}
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
                <button className={styles.submitBtn} type='submit'>Add</button>
            </form>
        </MainContent>
    );
};

export default AddMealPage;