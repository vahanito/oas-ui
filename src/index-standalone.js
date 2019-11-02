import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery';
import 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const showOas = (spec, element) => {
    ReactDOM.render(<App initValue={spec}/>, element);
};

serviceWorker.unregister();