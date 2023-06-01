import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';


render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );