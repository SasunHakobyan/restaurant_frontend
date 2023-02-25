import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import styles from "../AddRestaurantPage/AddRestaurant.module.css";
import MainContent from "../../../layout/MainContent/MainContent";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {fillMealDetail} from "../../../store/thunk/meal/fillMealDetail";
import {useParams} from "react-router-dom";
import {fillOwnerRestaurants} from "../../../store/thunk/restaurant/fillOwnerRestaurants";
import {clearMessages} from "../../../store/reducers/mealReducer";
import {IMeal} from "../../../models/meal";
import {editMeal} from "../../../store/thunk/meal/editMeal";

const EditMealPage = () => {
    const dispatch = useAppDispatch();
    const {mealDetail, infoMessage, successSave} = useAppSelector(state => state.mealReducer);
    const {restaurants} = useAppSelector(state => state.restaurantReducer);
    const {mealId} = useParams<{mealId?: string}>();

    const {
        register,
        formState: {
            errors,
        },
        reset,
        handleSubmit,
    } = useForm({
        defaultValues: useMemo(() => {
            return mealDetail;
        }, [mealDetail])
    });

    useEffect(() => {
        reset(mealDetail);
    }, [mealDetail]);

    useEffect(() => {
        dispatch(fillMealDetail(Number(mealId)));
        dispatch(fillOwnerRestaurants());
    }, []);

    useEffect(() => {
        if (successSave || infoMessage) {
            setTimeout(() => {
                dispatch(clearMessages())
            }, 2000)
        }
    }, [infoMessage, successSave])

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const reqBody: IMeal = {
            id: Number(mealId),
            name: data.name,
            description: data.description,
            price: Number(data.price),
            imgUrl: data.imgUrl,
            restaurantId: Number(data.restaurantId)
        };

        dispatch(editMeal(reqBody));
    }

    return (
        <MainContent>
            <h3>Edit Meal</h3>
            <form className={styles.form} onSubmit={handleSubmit(
                formSubmitHandler
            )}>
                {infoMessage && <div className={successSave ? styles.successMsg : styles.errorMsg}>{infoMessage}</div>}
                <div className={styles.formControl}>
                    <label>Name</label>
                    <input {
                               ...register('name', {
                                   required: 'Name is required',
                               })
                           } />
                    {errors?.name && <span className={styles.errorMsg}>{errors?.name?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Description</label>
                    <textarea {
                                  ...register('description', {
                                      required: 'Description is required',
                                  })
                              } />
                    {errors?.description && <span className={styles.errorMsg}>{errors?.description?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Price</label>
                    <input type='number' {
                               ...register('price', {
                                   required: 'Price is required',
                                   min: {
                                       value: 1,
                                       message: 'Price must be bigger than 0'
                                   }
                               })
                           } />
                    {errors?.price && <span className={styles.errorMsg}>{errors?.price?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Img Url</label>
                    <input {
                               ...register('imgUrl', {
                                   required: 'imgUrl is required',
                               })
                           } />
                    {errors?.imgUrl && <span className={styles.errorMsg}>{errors?.imgUrl?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Restaurant</label>
                    <select defaultValue={mealDetail?.restaurantId} {
                                ...register('restaurantId', {
                                    required: 'Please choose restaurant',
                                })
                            }>
                        {restaurants?.map(restaurant => {
                            return <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
                        })}
                    </select>
                </div>
                <input className={styles.submitBtn} type='submit' value='Save'/>
            </form>
        </MainContent>
    );
};

export default EditMealPage;