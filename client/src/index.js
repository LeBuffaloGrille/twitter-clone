import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"


import App from './App';
import Login from './Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/user" element={<App/>}></Route>
    </Routes>
  </BrowserRouter>
);
