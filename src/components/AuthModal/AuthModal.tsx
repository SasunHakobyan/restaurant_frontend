import Modal from "../../layout/Modal/Modal";
import SignForm from "./SignForm/SignForm";
import styles from './AuthModal.module.css';
import React from "react";
import classNames from "classnames";
import {setFormOption, setShowModal} from "../../store/reducers/authReducer";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {UserSign} from "../../models/user";

const AuthModal = () => {
    const dispatch = useAppDispatch();
    const authState = useAppSelector(state => state.authReducer);

    const closeModal = () => {
        dispatch(setShowModal(false))
    }

    const changeOptionHandler = (option: UserSign) => {
        dispatch(setFormOption(option));
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
        <Modal closeModal={closeModal}>
            <div className={styles.formToggle}>
                <button onClick={() => changeOptionHandler(UserSign.SignIn)} className={loginClassNames}>Login</button>
                <button onClick={() => changeOptionHandler(UserSign.SignUp)} className={registerClassNames}>Register</button>
            </div>

            <SignForm signType={authState.authFormOption}/>
        </Modal>
    );
};

export default AuthModal;