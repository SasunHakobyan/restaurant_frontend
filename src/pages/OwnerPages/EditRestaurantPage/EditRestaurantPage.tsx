import styles from '../AddRestaurantPage/AddRestaurant.module.css';
import MainContent from '../../../layout/MainContent/MainContent';
import {FieldValues, SubmitHandler, useForm, useWatch} from 'react-hook-form';
import {useParams} from 'react-router-dom';
import {useEffect, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {IRestaurant} from "../../../models/restaurant";
import {editRestaurant} from "../../../store/thunk/restaurant/editRestaurant";
import {getRestaurantFormData} from "../../../store/thunk/restaurant/getRestaurantFormData";

const EditRestaurantPage = () => {
    const dispatch = useAppDispatch();
    const {restaurantFormData} = useAppSelector(state => state.restaurantReducer);
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
                <div className={styles.formControl}>
                    <label>Name</label>
                    <input {
                        ...register('name', {
                            required: 'Name is required',
                        })
                    } />
                </div>
                <div className={styles.formControl}>
                    <label>Description</label>
                    <textarea {
                        ...register('description', {
                            required: 'Description is required',
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
                <input className={styles.submitBtn} type='submit' value='Save'/>
            </form>
        </MainContent>
    )
}

export default EditRestaurantPage;