import * as React from 'react';
import About from './about';
import Login from './login';
import Register from './register';
import './../app.sass';
import { HashRouter, Routes, Route } from 'react-router-dom'

function Main() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </HashRouter>       
    );
}
export default Main;