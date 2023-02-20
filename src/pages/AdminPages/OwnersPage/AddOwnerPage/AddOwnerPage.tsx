import React, {useEffect} from 'react';
import styles from './AddOwnerPage.module.css';
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../store/store";
import MainContent from "../../../../layout/MainContent/MainContent";
import {addOwner} from "../../../../store/thunk/admin/addOwner";
import {IUserAuth} from "../../../../models/user";
import {modalSlice} from "../../../../store/reducers/modalReducer";
import {adminSlice} from "../../../../store/reducers/adminReducer";
import {useNavigate} from "react-router-dom";

const AddOwnerPage = () => {
    const {infoMessage} = useAppSelector(state => state.adminReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    useEffect(() => {
        if (infoMessage) {
            dispatch(modalSlice.actions.setShowMessage({toggle: true, message: infoMessage}))
            dispatch(adminSlice.actions.clearMessages());

            navigate('/admin/owners');
        }
    }, [infoMessage])

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const reqBody: IUserAuth = {
            username: data.username,
            password: data.password
        };

        dispatch(addOwner(reqBody));
    }

    return (
        <MainContent>
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
                    {errors?.username &&
                        <span className={styles.errorMsg}>{errors?.username?.message?.toString()}</span>}
                </div>
                <div className={styles.formControl}>
                    <label>Password</label>
                    <input {
                               ...register('password', {
                                   required: 'Password is required',
                               })
                           } />
                    {errors?.username &&
                        <span className={styles.errorMsg}>{errors?.username?.message?.toString()}</span>}
                </div>
                <button className={styles.addBtn} type='submit'>Add</button>
            </form>
        </MainContent>
    );
};

export default AddOwnerPage;