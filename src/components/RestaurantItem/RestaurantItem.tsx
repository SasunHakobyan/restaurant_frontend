import styles from './RestaurantItem.module.css';
import { IRestaurant } from "../../models/restaurant";
import { Link } from 'react-router-dom';

interface IRestaurantItemProps {
    restaurant: IRestaurant;
}

const RestaurantItem = (props: IRestaurantItemProps) => {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.restImg} src={props.restaurant.imgUrl} />
            </div>
            <div className={styles.infoContainer}>
                <div>
                    <h3>{props.restaurant.name}</h3>
                    <p>{props.restaurant.description}</p>
                </div>
                <div>
                    <Link className={styles.editLink} to={`/edit-restaurant/${props.restaurant.id}`}>Edit</Link>
                </div>
            </div>
        </div>
    );
};

export default RestaurantItem;