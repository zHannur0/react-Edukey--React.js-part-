import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>} />
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/movies" element = {<Movies/>}/>
      <Route path = "/signIn" element = {<SignIn/>}/>
      <Route path = "/signUp" element = {<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// root.render(React.createElement(App));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

