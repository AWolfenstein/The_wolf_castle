import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import './index.css';
import App from './Layout/App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/configureStore';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import Notifier from './components/Notifier';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
      <Notifier />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
