import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducer/rootReducer';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducers, /* preloadedState, */
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{console.log(store.getState());})

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
       <App />
      </Provider>
    </BrowserRouter>
, document.getElementById('root'));
    
registerServiceWorker();
