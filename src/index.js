import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo1 from './Demo1';
import Avatar from './Avatar';
import Avatarlist from './Avatarlist';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Avatar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
