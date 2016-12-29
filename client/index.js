import React from 'react';
import { render } from 'react-dom';
import App from './pages/App';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
require('./css/style.sass');

render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app')); 
