import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import Firebase from './service/firebase.js';

const fb = new Firebase();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App fb={fb}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
