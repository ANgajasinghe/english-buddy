import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import './styles/main.css';
import {Provider} from 'react-redux';
import store from './@core/app-store/store';
import axios from 'axios';
import {Utility} from './@core/utility';
// @ts-ignore
import AnimatedCursor from "react-animated-cursor"

axios.defaults.baseURL = Utility.BASE_URL;

// Add interceptors
axios.interceptors.request.use(
  (request) => {
    request.headers['user-id'] = localStorage.getItem('userId');
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  <Provider store={store}>
    <AnimatedCursor />
    <App/>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
