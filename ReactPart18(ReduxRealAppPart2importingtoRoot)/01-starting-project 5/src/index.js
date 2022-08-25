import React from 'react';
import ReactDOM from 'react-dom/client';
//1st import our redux here Provider Component
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
//3rd import the store
import store from './store/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
//2nd now wrap our app with the react-redux provider the same way we do with context.provider 
root.render(<Provider store={store}><App /></Provider>);

// now all entire app has access to the store, can dispatch actions, subscribe etc...