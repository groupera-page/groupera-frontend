import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import {CookiesProvider} from "react-cookie";

import { store } from "./store";

import setupInterceptors from "./api/axiosInterceptors";

import Navigation from './Navigation';

import reportWebVitals from './reportWebVitals';

import './index.css';

import "./util/moment.helpers"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CookiesProvider>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


setupInterceptors(store);