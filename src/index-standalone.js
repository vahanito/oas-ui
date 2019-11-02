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
        const Http = new XMLHttpRequest();
        Http.open("GET", specUrl);
        Http.send();
        Http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const specObject = JSON.parse(Http.responseText);
                ReactDOM.render(<App initValue={specObject}/>, element);
            }
        }
    } else {
        ReactDOM.render(<App initValue={specData}/>, element);
    }
};

serviceWorker.unregister();