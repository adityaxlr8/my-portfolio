import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import PortfolioApp from './components/PortfolioApp'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom'




ReactDOM.render(
    <BrowserRouter>
    <PortfolioApp />
    </BrowserRouter>
    , document.getElementById('root'));

