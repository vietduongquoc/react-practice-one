import ErrorBoundary from './components/Error/ErrorBounDary';
import ReactDom from 'react-dom/client'
import './styles/index.css'
import React from "react";
import App from "./App";
import './App.css'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
