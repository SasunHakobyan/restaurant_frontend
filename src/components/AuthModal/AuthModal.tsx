import Modal from "../../layout/Modal/Modal";
import SignForm from "../SignForm/SignForm";
import styles from './AuthModal.module.css';
import React, {Ref, useRef, useState} from "react";
import classNames from "classnames";

export enum UserSign {
    SignIn = 'signIn',
    SignUp = 'signUp'
}

const AuthModal = () => {
    const [option, changeOption] = useState(UserSign.SignIn);

    const changeOptionHandler = (option: UserSign) => {
        changeOption(option);
    }

    const loginClassNames = classNames(
        styles.toggleBtn,
        styles.loginToggle,
        {[styles.activeToggle]: option === UserSign.SignIn}
    );

    const registerClassNames = classNames(
        styles.toggleBtn,
        styles.registerToggle,
        {[styles.activeToggle]: option === UserSign.SignUp}
    );

    return (
        <Modal>
            <div className={styles.formToggle}>
                <button onClick={() => changeOptionHandler(UserSign.SignIn)} className={loginClassNames}>Login</button>
                <button onClick={() => changeOptionHandler(UserSign.SignUp)} className={registerClassNames}>Register</button>
            </div>

            <SignForm signType={option}/>
        </Modal>
    );
};

export default AuthModal;