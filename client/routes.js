import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/Pages/App';
import Dashboard from './components/Pages/Dashboard/DashboardPage';
import SignupPage from './components/Pages/Signup/SignupPage';
import ClientsPage from './components/Pages/Clients/ClientsPage';
import UsersPage from './components/Pages/Users/UsersPage';
import BusinessPage from './components/Pages/Business/BusinessPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="signup" component={SignupPage} />
        <Route path="clients" component={ClientsPage} />
        <Route path="users" component={UsersPage} />
        <Route path="business" component={BusinessPage} />
    </Route>
)