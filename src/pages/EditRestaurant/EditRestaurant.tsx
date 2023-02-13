import styles from './EditRestaurant.module.css';
import MainContent from '../../layout/MainContent/MainContent';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getRestaurantFormData} from "../../store/reducers/restaurantReducer";

const EditRestaurant = () => {
	const dispatch = useAppDispatch();
	const {restaurantFormData} = useAppSelector(state => state.restaurantReducer);
	const params = useParams();

	useEffect(() => {
		dispatch(getRestaurantFormData(Number(params.restaurantId)))
	}, []);

	const {
		register,
		formState: {
			errors,
		},
		handleSubmit
	} = useForm();

	const formSubmitHandler = () => {

	}

	return (
		<MainContent>
			<h3>Edit Restaurant</h3>
			<form onSubmit={handleSubmit(
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
				<input type='submit' value='Save' />
			</form>
		</MainContent>
	)
}

export default EditRestaurant;