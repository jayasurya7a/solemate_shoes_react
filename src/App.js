import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Navbar from './components/Navbar';
import Products from './pages/Products';

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route 
          path='/products'
          element={
            <PrivateRoute>
              <Navbar />
              <Products />
            </PrivateRoute>
          }
        />
      <Route 
        path='/*'
        element={
          <PrivateRoute>
            <Navbar />
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
    </AuthProvider> 
  );
}

export default App;