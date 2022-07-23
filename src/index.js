import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ColorThemeProvider from "./context/colorThemeProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ColorThemeProvider>
        <App />
    </ColorThemeProvider>

);


//High Order Component