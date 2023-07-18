import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './Others/reportWebVitals';
import App from './MainFolder/App';
import './MainFolder/Style/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
