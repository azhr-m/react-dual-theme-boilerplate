import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";

import { WebContextProvider } from './Contexts/WebContext';

import './assets/styles/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <WebContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </WebContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);