import React from 'react';
import Modal from "../../layout/Modal/Modal";
import {authSlice, loginUser} from "../../store/reducers/authReducer";
import {IUser, IUserAuth} from "../../models/user";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import styles from './AuthModal.module.css';
import {useAppDispatch, useAppSelector} from "../../store/store";

const AuthModal = () => {
    const dispatch = useAppDispatch();
    const authState = useAppSelector(state => state.authReducer);

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const user: IUser = {
            username: data.username
        }

        const reqBody: IUserAuth = {
            username: data.username,
            password: data.password
        }

        dispatch(loginUser(reqBody));
    }

    return (
        <Modal>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                {authState.error && <div className={styles.formError}>{authState.error}</div>}
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