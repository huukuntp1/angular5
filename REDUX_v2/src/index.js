import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import appReducers from './reducers/index';

const middleware = applyMiddleware(thunk);

const store = createStore(appReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),middleware);


// store.dispatch((dispatch) => {
//     dispatch({type: 'FETCH_DATA_START'});
//     fetch('https://5aded024bf932f0014d11afd.mockapi.io/api/v1/todo').then(response => response.json()).then(data => {console.log('123');});
    
// })

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>, 
document.getElementById('root'));

registerServiceWorker();
