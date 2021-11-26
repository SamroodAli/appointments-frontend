import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import redux from './redux';
import App from './components/App';
import './style.css';

ReactDOM.render(
  <Provider store={redux.store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
