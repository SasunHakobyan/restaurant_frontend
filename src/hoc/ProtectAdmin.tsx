import React from 'react';
import {useAppSelector} from "../store/store";
import {Navigate, useNavigate} from "react-router-dom";
import {RoleValue} from "../models/user";

interface IProtectAdminProps {
    children: React.ReactNode;
}

const ProtectAdmin = (props: IProtectAdminProps) => {
    const authState = useAppSelector(state => state.authReducer);
    const navigate = useNavigate();

    if (authState.user.role.value !== RoleValue.Admin) {
        return <Navigate to='/' />
    }

    return <>{props.children}</>
};

export default ProtectAdmin;