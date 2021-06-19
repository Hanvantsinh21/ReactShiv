import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";    
import './Web.css';
import WebApp from './WebApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
        <>
                <BrowserRouter>
                                <WebApp />
                </BrowserRouter>
        </>,
        document.getElementById("root")
)

