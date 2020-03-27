import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios';

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';

import NavBar from './components/NavBar';
import About from './pages/about';
import Home from './pages/home';

axios.defaults.baseURL = 'https://reqres.in/api';

function App () {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
