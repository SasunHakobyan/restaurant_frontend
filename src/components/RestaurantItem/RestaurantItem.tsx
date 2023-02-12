import styles from './RestaurantItem.module.css';
import { IRestaurant } from "../../models/restaurant";
import { Link } from 'react-router-dom';

interface IRestaurantItemProps {
    restaurant: IRestaurant;
}

const RestaurantItem = (props: IRestaurantItemProps) => {
    return (
        <div className={styles.itemContainer}>
            <div>
                <img className={styles.restImg} src={props.restaurant.imgUrl} />
            </div>
            <div className={styles.infoContainer}>
                <h3>{props.restaurant.name}</h3>
                <Link to={`/edit-restaurant/${props.restaurant.id}`}>Edit</Link>
                <p>{props.restaurant.description}</p>
            </div>
        </div>
    );
};

export default RestaurantItem;