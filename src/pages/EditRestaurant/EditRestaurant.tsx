import styles from './EditRestaurant.module.css';
import MainContent from '../../layout/MainContent/MainContent';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const EditRestaurant = () => {
	const params = useParams();

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
				<input type='submit' value='Save' />
			</form>
		</MainContent>
	)
}

export default EditRestaurant;