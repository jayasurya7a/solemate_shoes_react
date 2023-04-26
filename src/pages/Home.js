import React from 'react'
import {useNavigate} from 'react-router-dom';
import {auth} from '../firebase';

function Home() {
	const navigate = useNavigate();
	return (
		<div>
			<h2>Home</h2>
			<button onClick={()=> {
				auth.signOut();
				navigate('/login',{replace:true})
			}} 
			>Sign out</button>
		</div>
	)
}

export default Home