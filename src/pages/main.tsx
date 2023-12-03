import * as React from 'react';
import About from './about';
import Login from './login';
import Register from './register';
import Start from './start';
import './../styles/app.sass';
import './../styles/app.less';
import { HashRouter, Routes, Route  } from 'react-router-dom'
import { CustomProvider } from 'rsuite';
import { PrivateRoute } from "./PrivateRoute";

function Main() {
  return (
    <CustomProvider theme="dark">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Start />} />
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
    </CustomProvider>
  );
}
export default Main;