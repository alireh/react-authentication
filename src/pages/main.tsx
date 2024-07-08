import * as React from 'react';
import About from './about';
import "./../styles/app.sass";
import "./../styles/app.less";
import { HashRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "./login";
import Register from "./register";
import Start from "./start";

function Main() {
  return (
    // <CustomProvider theme="dark">
    // </CustomProvider>
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Start />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/start"
          element={
            <PrivateRoute>
              <Start />
            </PrivateRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
}
export default Main;