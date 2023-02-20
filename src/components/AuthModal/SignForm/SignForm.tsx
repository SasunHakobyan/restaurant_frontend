import React from 'react';
import styles from './SignForm.module.css';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {IUserAuth, UserSign} from "../../../models/user";
import {loginUser} from "../../../store/thunk/auth/loginUser";
import {registerUser} from "../../../store/thunk/auth/registerUser";

interface ISignFormProps {
    signType: UserSign
}

const SignForm = (props: ISignFormProps) => {
    const authState = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const reqBody: IUserAuth = {
            username: data.username,
            password: data.password
        }

        if (props.signType === UserSign.SignIn) {
            dispatch(loginUser(reqBody))
        } else {
            dispatch(registerUser(reqBody))
        }
    }

    return (
        <form onSubmit={handleSubmit(formSubmitHandler)}>
            {authState.error && <div className={styles.signError}>{authState.error}</div>}
            <div className={styles.formControl}>
                <label>Username</label>
                <input {...register('username', {
                    required: 'Username is required',
                    minLength: {
                        value: 4,
                        message: 'Username length must be minimum 4'
                    }
                })} />
                {errors?.username && <span className={styles.errorMsg}>{errors?.username?.message?.toString()}</span>}
            </div>
            <div className={styles.formControl}>
                <label>Password</label>
                <input type='password' {...register('password', {
                    required: 'Password is required',
                    minLength: {
                        value: 4,
                        message: 'Password length must be minimum 4'
                    }
                })} />
                {errors?.password && <span className={styles.errorMsg}>{errors?.password?.message?.toString()}</span>}
            </div>
            <button className={styles.submitBtn} type='submit'>{props.signType === UserSign.SignIn ? 'Login' : 'Register'}</button>
        </form>
    );
};

export default SignForm;