import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import reducer from './reducers';

import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

import App from './containers/App/';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
