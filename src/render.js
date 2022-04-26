import React from 'react';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/state";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
}
