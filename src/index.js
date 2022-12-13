import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('hp'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();