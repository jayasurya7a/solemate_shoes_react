import React,{useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from './Auth';

const PrivateRoute = ({children}) => {
	const {currentUser} = useContext(AuthContext);
	// console.log(currentUser)
	const isAuthenticated = currentUser ? true : false;
	// console.log(isAuthenticated);
	if(isAuthenticated){
		return children
	}
	return <Navigate to="/login" replace={true} />
};

export default PrivateRoute;