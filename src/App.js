import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

    return (

        <Box width="400px" sx={
            {
                width:
                {
                    xl: '1488px'
                }
            }
        }
            m="auto">;
            {/* <Navbar /> */}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/exercies/:id" element={<ExerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
};

export default App;