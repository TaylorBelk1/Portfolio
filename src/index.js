import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import './assets/fonts/Montserrat/Montserrat-Black.ttf';
import './assets/fonts/Montserrat/Montserrat-Bold.ttf';
import './assets/fonts/Montserrat/Montserrat-Medium.ttf';
import './assets/fonts/Montserrat/Montserrat-Regular.ttf';

import './assets/fonts/Roboto/Roboto-Black.ttf';
import './assets/fonts/Roboto/Roboto-Bold.ttf';
import './assets/fonts/Roboto/Roboto-Medium.ttf';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Thin.ttf';



ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById('root'));

