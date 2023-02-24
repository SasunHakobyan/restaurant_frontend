import styles from '../AddRestaurantPage/AddRestaurant.module.css';
import MainContent from '../../../layout/MainContent/MainContent';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {useParams} from 'react-router-dom';
import React, {useEffect, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {IRestaurant} from "../../../models/restaurant";
import {editRestaurant} from "../../../store/thunk/restaurant/editRestaurant";
import {getRestaurantFormData} from "../../../store/thunk/restaurant/getRestaurantFormData";
import {clearMessages} from "../../../store/reducers/restaurantReducer";

const EditRestaurantPage = () => {
    const dispatch = useAppDispatch();
    const {restaurantFormData, infoMessage, savedSuccess} = useAppSelector(state => state.restaurantReducer);
    const {restaurantId} = useParams<{ restaurantId?: string }>();

    const {
        register,
        formState: {
            errors,
        },
        reset,
        handleSubmit,
    } = useForm({
        defaultValues: useMemo(() => {
            return restaurantFormData
        }, [restaurantFormData])
    });

    useEffect(() => {
        reset(restaurantFormData);
    }, [restaurantFormData])

    useEffect(() => {
        if (savedSuccess || infoMessage) {
            setTimeout(() => {
                dispatch(clearMessages())
            }, 2000)
        }
    }, [infoMessage, savedSuccess])

    useEffect(() => {
        dispatch(getRestaurantFormData(Number(restaurantId)));
    }, []);

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const reqBody: Omit<IRestaurant, "id" | "ownerId"> = {
            name: data.name,
            description: data.description,
            imgUrl: data.imgUrl
        };

        dispatch(editRestaurant({restaurantId: Number(restaurantId), restaurant: reqBody}))
    }

    return (
        <MainContent>
            <h3>Edit Restaurant</h3>
            <form className={styles.form} onSubmit={handleSubmit(
                formSubmitHandler
            )}>
                {infoMessage && <div className={savedSuccess ? styles.successMsg : styles.errorMsg}>{infoMessage}</div>}
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
                    <label>Img Url</label>
                    <input {
                        ...register('imgUrl', {
                            required: 'imgUrl is required',
                        })
                    } />
                    {errors?.imgUrl && <span className={styles.errorMsg}>{errors?.imgUrl?.message?.toString()}</span>}
                </div>
                <input className={styles.submitBtn} type='submit' value='Save'/>
            </form>
        </MainContent>
    )
}

export default EditRestaurantPage;