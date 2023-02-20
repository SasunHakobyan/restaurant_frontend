import styles from './Navigation.module.css';

import restaurantLogo from '../../assets/logos/restaurant.svg';
import mealLogo from '../../assets/logos/meal.svg';
import homeLogo from '../../assets/logos/home.svg';
import profileLogo from '../../assets/logos/profile.png'

import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authSlice} from "../../store/reducers/authReducer";
import {useAppSelector} from "../../store/store";
import {RoleValue, UserSign} from "../../models/user";
import {MouseEventHandler} from "react";
import {modalSlice} from "../../store/reducers/modalReducer";

interface INavigationProps {
    isLoggedIn: boolean;
}

const Navigation = (props: INavigationProps) => {
    const dispatch = useDispatch();
    const authState = useAppSelector(state => state.authReducer);
    const navigate = useNavigate();

    const onProfileButtonClick = (option: UserSign) => {
        dispatch(authSlice.actions.setShowModal(true));
        dispatch(authSlice.actions.setFormOption(option));
    }

    const onLogoutButtonClick = () => {
        dispatch(authSlice.actions.logout());
        navigate('/')
    }

    const navLinkHandler: MouseEventHandler<HTMLElement> = (e) => {
        if (!props.isLoggedIn) {
            e.preventDefault();

            dispatch(modalSlice.actions.setShowMessage({
                toggle: true,
                message: 'Please signIn to see content'
            }));
        }
    }

    const activeItemStyles = {
        backgroundColor: '#FFCB3F',
        borderRadius: '10px',
        color: 'black'
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.menuItemsContainer}>
                <div className={styles.itemContainer}>
                    <NavLink style={({isActive}) => isActive ? activeItemStyles : undefined}
                             className={styles.navItem}
                             to='/'>
                        <img alt='home' className={styles.logo} src={homeLogo}/>
                        <p className={styles.menuText}>Home</p>
                    </NavLink>
                </div>
                <div className={styles.itemContainer}>
                    <NavLink style={({isActive}) => isActive ? activeItemStyles : undefined}
                             className={styles.navItem}
                             onClick={navLinkHandler}
                             to='/restaurants'>
                        <img alt='menu' className={styles.logo} src={restaurantLogo}/>
                        <p className={styles.menuText}>Restaurants</p>
                    </NavLink>
                </div>
                <div className={styles.itemContainer}>
                    <NavLink style={({isActive}) => isActive ? activeItemStyles : undefined}
                             className={styles.navItem}
                             onClick={navLinkHandler}
                             to='/meals'>
                        <img alt='menu' className={styles.logo} src={mealLogo}/>
                        <p className={styles.menuText}>Meals</p>
                    </NavLink>
                </div>
            </div>

            {props.isLoggedIn &&
                <div className={styles.userContainer}>
                    <img className={styles.profileLogo} src={profileLogo} alt=""/>
                    <span className={styles.profileName}>{authState.user.username}</span>
                    <span className={styles.profileRole}>{authState.user.role.value}</span>
                    {authState.user.role.value === RoleValue.Admin &&
                        <Link className={styles.editLink} to='/admin'>Manage</Link>
                    }
                    {authState.user.role.value === RoleValue.RestOwner &&
                        <Link className={styles.editLink} to='/owner'>Manage</Link>
                    }
                    <button onClick={onLogoutButtonClick} className={styles.btnLogout}>Logout</button>
                </div>
            }

            {!props.isLoggedIn &&
                <div className={styles.authContainer}>
                    <button onClick={() => onProfileButtonClick(UserSign.SignIn)} className={styles.btnLogout}>Login</button>
                    <button onClick={() => onProfileButtonClick(UserSign.SignUp)} className={styles.btnLogout}>Register</button>
                </div>
            }

        </div>
    );
};

export default Navigation;