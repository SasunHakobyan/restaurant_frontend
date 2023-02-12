import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import MainContent from '../../layout/MainContent/MainContent';
import { IAddRestaurant } from '../../models/restaurant';
import { addRestaurant } from '../../store/reducers/restaurantReducer';
import { useAppDispatch } from '../../store/store';
import styles from './AddRestaurant.module.css';

const AddRestaurant = () => {
	const dispatch = useAppDispatch();

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

		dispatch(addRestaurant(reqBody));
	}

	//:TODO dropdown for add meal restaurant select
	return (
		<MainContent>
			<h3>Add Restaurant</h3>
			<form onSubmit={handleSubmit(
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
					<input {
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
				<input type='submit' value='Add' />
			</form>
		</MainContent>
	)
}

export default AddRestaurant;