import React from 'react';
import { render } from 'react-dom';
import App from './components/Pages/App';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import RouterContainer from './services/routerContainer';
import LoginActions from './actions/loginActions';

import routes from './routes';
// require('./css/style.sass');

ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app')); 
