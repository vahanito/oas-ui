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

export const showOas = (specUrl, specData, element) => {
  if (specUrl) {
    fetch(specUrl, {method: 'GET'})
      .then(response => response.json())
      .then(spec => <App oas={spec}/>);
  } else {
    ReactDOM.render(<App initValue={specData}/>, element);
  }
};

serviceWorker.unregister();
