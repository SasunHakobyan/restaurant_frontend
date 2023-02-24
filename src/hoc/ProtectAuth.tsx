import React from "react";
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';

interface IProtectAuthProps {
	children: React.ReactNode
}

export function ProtectAuth(props: IProtectAuthProps) {
	const authState = useAppSelector(state => state.authReducer);

	if (!authState.isLoading && !authState.isLoggedIn) {
		return <Navigate to='/' />
	}

	return <>{props.children}</>
}