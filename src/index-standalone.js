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

export const showOas = (specUrl, specData, elementName) => {
  const element = document.getElementById(elementName);
  if (specUrl) {
    fetch(specUrl, {method: 'GET'})
      .then(response => response.json())
      .then(spec => ReactDOM.render(<App oas={spec}/>, element));
  } else {
    ReactDOM.render(<App oas={specData}/>, element);
  }
};

serviceWorker.unregister();
