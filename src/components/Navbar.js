import React from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';


function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 right-0 bg-transparent h-16 px-4 text-white z-50">
      <div className="flex items-center">
        <img
          className="h-8 w-8 mr-2"
          src="/path/to/logo.png"
          alt="Logo"
        />
      </div>
      <div className="w-1/2 mx-8">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 bg-transparent border-none text-sm text-white focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-end">
        <button className="text-3xl mr-4">
          <svg
            className="h-6 w-6 text-white hover:text-gray-500"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 22a2 2 0 002-2h6a2 2 0 002 2h5l-2.707-13.536A2 2 0 0015.301 5H5.7a2 2 0 00-1.992 1.464L1 19h5zM15 9a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button onClick={()=> {
          auth.signOut();
          navigate('/login',{replace:true})
        }} 
        >Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
