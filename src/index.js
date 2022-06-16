import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./firebase";
import 'firebase/firestore';

//Не сделали, если что -то удалить
const firebase = require("./firebase");
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

