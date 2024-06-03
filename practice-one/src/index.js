import React from "react";
import './styles/index.css'
import './App.css'
import ReactDom from 'react-dom/client'
import App from "./App";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)