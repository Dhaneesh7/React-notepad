import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
///import {Home} from './pages/Home'
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import Progressb from './pages/Progress.js';
//import Search from './pages/Searchbar';
//import Home from './pages/Home';
//import Load from './pages/Load';
//import Search from './pages/Searchbar';
//import Search from './pages/search';
//import Login from './pages/Login';
//import Counts from './pages/Counts';
// import Load  from './pages/Load.js';
//import Parent from './pages/Parent.js';
//import Search from './pages/Search.js'; 
//import Home from './pages/Home.js';
//import { Route,Router,BrowserRouter, Routes } from 'react-router-dom';
//import Routem from './pages/Routem.js';
import Project1 from './exam/Project1.js';
import Routem from './pages/Routem.js';
//import Routem from './pages/Routem.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routem />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
