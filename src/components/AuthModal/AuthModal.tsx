import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import Modal from "../../layout/Modal/Modal";
import {authSlice} from "../../store/reducers/authReducer";
import {IUser} from "../../models/user";
import {modalSlice} from "../../store/reducers/modalReducer";
import {useDispatch} from "react-redux";

interface IAuthModalProps {
    toggleModal: (showModal: boolean) => void;
}

const AuthModal = (props: IAuthModalProps) => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const dispatch = useDispatch();

    const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const user: IUser = {
            id: 1,
            username: usernameValue
        }

        dispatch(authSlice.actions.login(user));
        dispatch(modalSlice.actions.setShowModal(false));
    }

    const usernameValueChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const username = e.currentTarget.value;
        setUsernameValue(username);
    }

    const passwordValueChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const password = e.currentTarget.value;
        setPasswordValue(password);
    }

    return (
        <Modal toggleModal={props.toggleModal}>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <input onChange={usernameValueChangeHandler} type='text' placeholder='username' />
                </div>
                <div>
                    <input onChange={passwordValueChangeHandler} type='text' placeholder='password'/>
                </div>
                <button type='submit'>Login</button>
            </form>
        </Modal>
    );
};

export default AuthModal;