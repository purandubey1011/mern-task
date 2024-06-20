import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Carddetail from './components/Carddetail';

const App = () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/card/:cardid" element={<Carddetail
                     />} />
            </Routes>
        );
};

export default App;
