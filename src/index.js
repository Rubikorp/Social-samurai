import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
    {id:1, message:'Hi, how are you?', like: 3},
    {id:2, message:'Its my first post', like: 4}
];
let dialogsData = [
    {id:1, name: 'Ruslan'},
    {id:2, name: 'Roman'},
    {id:3, name: 'Elina'},
    {id:4, name: 'Victor'},
    {id:5, name: 'Dmitriy'},
    {id:6, name: 'Aleksey'},
];
let messagesData = [
    {id:1, message: 'HI'},
    {id:2, message: 'How are you?'},
    {id:3, message: 'Ruslan'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <App postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
