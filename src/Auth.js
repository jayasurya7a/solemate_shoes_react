import React, {useEffect,useState} from 'react';
import { auth } from "./firebase";

// const auth=getAuth();
export const AuthContext = React.createContext();

export const AuthProvider = ({children})=>{
	const [currentUser,setCurrentUser] = useState(undefined);
	const [pending, setPending] = useState(true);

	useEffect(()=>{
		auth.onAuthStateChanged((user)=>{
			setCurrentUser(user)
			setPending(false)
		});
	}, []);
	
	console.log(currentUser)

	if(pending){
		return <>Loading...</>
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};