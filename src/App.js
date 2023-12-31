import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Loginme';
import Forgot from './pages/Forgot/Forgot';
import Signup from './pages/Signup/Signup';
import Profile from './pages/Profile/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Unavailable from './pages/Unavailable';
import MyImage from '../src/pages/Main/bg.jpg';
function App() {
  
  const bgImg = `url(${MyImage})`;
  return (
    <>
    <div className='w-100 bg-image ' id='123' style={{ backgroundImage: bgImg,height:700}}>
    
    <ToastContainer/>
    <Router>

      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/Login" element={<Main/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Forgotpass" element={<Forgot/>} />
        <Route path="/Forgotpass/Signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/home" element={<Main/>} />
        <Route path="/unavailable" element={<Unavailable/>}/>
      </Routes>

    </Router>
    </div>
    </>
  );
  
}

export default App;
