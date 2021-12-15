import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import YoutubeAPI from './youtubeAPI';

const api = new YoutubeAPI(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App api={api}/>
  </React.StrictMode>,
  document.getElementById('root')
);
