import React from 'react';
import styles from './AddOwnerPage.module.css';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import MainContent from "../../../../layout/MainContent/MainContent";
import {addOwner} from "../../../../store/thunk/admin/addOwner";
import {IUserAuth} from "../../../../models/user";

const AddOwnerPage = () => {
    const {addError} = useAppSelector(state => state.adminReducer);
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
        };

        dispatch(addOwner(reqBody));
    }

    return (
        <MainContent>
            {addError && <div className={styles.signError}>{addError}</div>}
            <form className={styles.form} onSubmit={handleSubmit(
                formSubmitHandler
            )}>
                <h3>Add Owner</h3>
                <div className={styles.formControl}>
                    <label>Username</label>
                    <input {
                               ...register('username', {
                                   required: 'Username is required',
                               })
                           } />
                    {errors?.username && <span className={styles.errorMsg}>{errors?.username?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Password</label>
                    <input {
                               ...register('password', {
                                   required: 'Password is required',
                               })
                           } />
                    {errors?.username && <span className={styles.errorMsg}>{errors?.username?.message?.toString()}</span>}
                </div>
                <button className={styles.addBtn} type='submit'>Add</button>
            </form>
        </MainContent>
    );
};

export default AddOwnerPage;