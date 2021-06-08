import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store"
import {Provider}from "react-redux"

store.subscribe(() =>{
  console.log("store changed", store.getState());})

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

reportWebVitals();
