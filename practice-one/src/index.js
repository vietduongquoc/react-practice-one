import React from "react";
import './styles/index.css'
import './App.css'
import ReactDom from 'react-dom/client'
import Routes from './routes'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
)