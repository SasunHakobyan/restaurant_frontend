import styles from '../AddRestaurantPage/AddRestaurant.module.css';
import MainContent from '../../../layout/MainContent/MainContent';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import {useParams} from 'react-router-dom';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {getRestaurantFormData} from "../../../store/reducers/restaurantReducer";
import {IAddRestaurant} from "../../../models/restaurant";
import {editRestaurant} from "../../../store/thunk/restaurant/editRestaurant";

const EditRestaurantPage = () => {
    const dispatch = useAppDispatch();
    const {restaurantFormData} = useAppSelector(state => state.restaurantReducer);
    const {restaurantId} = useParams<{ restaurantId?: string }>();

    useEffect(() => {
        dispatch(getRestaurantFormData(Number(restaurantId)))
    }, []);

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const reqBody: IAddRestaurant = {
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
                    <input defaultValue={restaurantFormData.name} {
                        ...register('name', {
                            required: 'Name is required',
                        })
                    } />
                </div>
                <div className={styles.formControl}>
                    <label>Description</label>
                    <textarea defaultValue={restaurantFormData.description} {
                        ...register('description', {
                            required: 'Description is required',
                        })
                    } />
                </div>
                <div className={styles.formControl}>
                    <label>Img Url</label>
                    <input defaultValue={restaurantFormData.imgUrl} {
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