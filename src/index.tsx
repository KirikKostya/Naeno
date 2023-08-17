import React from 'react';
import reportWebVitals from './Others/reportWebVitals';
import store from './ReduxToolkit/Store';
import ReactDOM from 'react-dom/client';
import App from './Pages/App/App';
import { Provider } from 'react-redux';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
