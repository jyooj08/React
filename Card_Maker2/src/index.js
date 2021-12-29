import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service.js'
import firebaseConfig from './service/firebase';
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
