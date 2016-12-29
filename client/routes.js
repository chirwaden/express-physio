import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/Page__Signup/SignupPage';
import ClientsPage from './components/Page__Clients/ClientsPage';
import UsersPage from './components/Page__Users/UsersPage';
import BusinessPage from './components/Page__Business/BusinessPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings} />
        <Route path="signup" component={SignupPage} />
        <Route path="clients" component={ClientsPage} />
        <Route path="users" component={UsersPage} />
        <Route path="business" component={BusinessPage} />
    </Route>
)