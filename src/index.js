import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp(
  {
    apiKey: "AIzaSyCDvvIlzQhcfxo3XJwad_nPpp9fPR9M7Zk",
    authDomain: "oyz-chat.firebaseapp.com",
    projectId: "oyz-chat",
    storageBucket: "oyz-chat.appspot.com",
    messagingSenderId: "882034420296",
    appId: "1:882034420296:web:726af4d966daa0b37fc67d",
    measurementId: "G-VBEVE019RP"
  }
);

export const Context = createContext(null)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{firestore, auth, firebase}}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

