import styles from './RestaurantItem.module.css';
import { IRestaurant } from "../../models/restaurant";
import {Link, NavLink} from "react-router-dom";

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
                    <h3 className={styles.restName}>{props.restaurant.name}</h3>
                    <p className={styles.restDescription}>
                        {props.restaurant.description.length >= 65 ?
                            props.restaurant.description.slice(0, 65) + '...' :
                            props.restaurant.description
                        }
                    </p>
                </div>
                <Link className={styles.detailLink} to={`/restaurant/${props.restaurant.id}`}>See meals <span className={styles.linkArrow}>&#8594;</span></Link>
            </div>
        </div>
    );
};

export default RestaurantItem;