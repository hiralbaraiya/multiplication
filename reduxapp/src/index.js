import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import {reducer} from './Reducer'
import  App  from './App';
import { INCREMENT, DECREMENT } from "./Action";
import './index.css';

const store=createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <App/>
  
  </Provider>,
  document.getElementById('root')
);
