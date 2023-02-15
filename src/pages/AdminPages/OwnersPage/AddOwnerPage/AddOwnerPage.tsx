import React from 'react';
import MainContent from "../../../../layout/MainContent/MainContent";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {IAddRestaurant} from "../../../../models/restaurant";
import styles from "../../../OwnerPages/AddRestaurantPage/AddRestaurant.module.css";

const AddOwnerPage = () => {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm();

    const formSubmitHandler: SubmitHandler<FieldValues> = async (data) => {
        const reqBody: IAddRestaurant = {
            name: data.name,
            description: data.description,
            imgUrl: data.imgUrl
        };
    }

    return (
        <MainContent>
            <h3>Add Owner</h3>
            <form className={styles.form} onSubmit={handleSubmit(
                formSubmitHandler
            )}>
                <div className={styles.formControl}>
                    <label>Username</label>
                    <input {
                               ...register('username', {
                                   required: 'Username is required',
                               })
                           } />
                </div>
                <div className={styles.formControl}>
                    <label>Password</label>
                    <input type='password' {
                               ...register('password', {
                                   required: 'Password is required',
                               })
                           } />
                </div>
            </form>
        </MainContent>
    );
};

export default AddOwnerPage;