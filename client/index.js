import React from 'react';
import { render } from 'react-dom';
import App from './components/Pages/App';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/index';  
import { AUTH_USER } from './actions/types';
import routes from './routes';
import cookie from 'react-cookie';
//import api from './middleware/api'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);  
const store = createStoreWithMiddleware(reducers);

const token = cookie.load('token');

if (token) {  
  store.dispatch({ type: AUTH_USER });
}

// ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app')); 
ReactDOM.render(  
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'));