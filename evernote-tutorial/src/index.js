import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// const firebaseConfig = {

// };

firebase.initializeApp({
  apiKey: "AIzaSyDOrzp_F_dwgk1FG-Z9RqHBywRHVGcs9jQ",
  authDomain: "evernote-clone-89fad.firebaseapp.com",
  databaseURL: "https://evernote-clone-89fad.firebaseio.com",
  projectId: "evernote-clone-89fad",
  storageBucket: "",
  messagingSenderId: "924961772877",
  appId: "1:924961772877:web:e1669db9b1231ba6"
})

ReactDOM.render(<App />, document.getElementById('evernote-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
