import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Container/App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { BrowserRouter } from 'react-router-dom';

const store = legacy_createStore(reducer)


const root = ReactDOM.createRoot(document.querySelector('.f-Cleaning_best_cleaning_services'));
root.render(
  <React.StrictMode>

      <Provider store={store}>

        <BrowserRouter>

          <App />
          
        </BrowserRouter>

      </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
