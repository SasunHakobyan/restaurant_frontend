import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import Modal from "../../layout/Modal/Modal";
import {authSlice} from "../../store/reducers/authReducer";
import {IUser} from "../../models/user";
import {modalSlice} from "../../store/reducers/modalReducer";
import {useDispatch} from "react-redux";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import styles from './AuthModal.module.css';

interface IAuthModalProps {
    toggleModal: (showModal: boolean) => void;
}

const AuthModal = (props: IAuthModalProps) => {
    const dispatch = useDispatch();

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    const formSubmitHandler: SubmitHandler<FieldValues> = (data) => {
        const user: IUser = {
            id: 1,
            username: data.username
        }

        dispatch(authSlice.actions.login(user));
        dispatch(modalSlice.actions.setShowModal(false));
    }

    return (
        <Modal toggleModal={props.toggleModal}>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <div className={styles.formControl}>
                    <label>Username</label>
                    <input {...register('username', {
                        required: 'Username is required',
                        minLength: {
                            value: 4,
                            message: 'Username length must be minimum 4'
                        }
                    })}/>
                    {errors?.username && <span className={styles.errorMsg}>{errors?.username?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Password</label>
                    <input {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 4,
                            message: 'Password length must be minimum 4'
                        }
                    })}/>
                    {errors?.password && <span className={styles.errorMsg}>{errors?.password?.message?.toString()}</span>}
                </div>
                <button className={styles.submitBtn} type='submit'>Login</button>
            </form>
        </Modal>
    );
};

export default AuthModal;