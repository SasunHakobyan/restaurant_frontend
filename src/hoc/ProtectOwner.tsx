import React from 'react';
import {useAppSelector} from "../store/store";
import {Navigate, useNavigate} from "react-router-dom";
import {RoleValue} from "../models/user";

interface IProtectOwnerProps {
    children: React.ReactNode;
}

const ProtectOwner = (props: IProtectOwnerProps) => {
    const authState = useAppSelector(state => state.authReducer);
    const navigate = useNavigate();

    if (authState.user.role.value !== RoleValue.RestOwner) {
        return <Navigate to='/' />
    }

    return <>{props.children}</>
};

export default ProtectOwner;