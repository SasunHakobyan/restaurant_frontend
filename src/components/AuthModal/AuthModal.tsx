import Modal from "../../layout/Modal/Modal";
import SignForm from "../SignForm/SignForm";
import styles from './AuthModal.module.css';
import React from "react";
import classNames from "classnames";
import {authSlice, UserSign} from "../../store/reducers/authReducer";
import {useAppDispatch, useAppSelector} from "../../store/store";

const AuthModal = () => {
    const dispatch = useAppDispatch();
    const authState = useAppSelector(state => state.authReducer);

    const changeOptionHandler = (option: UserSign) => {
        dispatch(authSlice.actions.setFormOption(option));
    }

    const loginClassNames = classNames(
        styles.toggleBtn,
        styles.loginToggle,
        {[styles.activeToggle]: authState.authFormOption === UserSign.SignIn}
    );

    const registerClassNames = classNames(
        styles.toggleBtn,
        styles.registerToggle,
        {[styles.activeToggle]: authState.authFormOption === UserSign.SignUp}
    );

    return (
        <Modal>
            <div className={styles.formToggle}>
                <button onClick={() => changeOptionHandler(UserSign.SignIn)} className={loginClassNames}>Login</button>
                <button onClick={() => changeOptionHandler(UserSign.SignUp)} className={registerClassNames}>Register</button>
            </div>

            <SignForm signType={authState.authFormOption}/>
        </Modal>
    );
};

export default AuthModal;