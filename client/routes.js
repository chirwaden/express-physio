import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Dashboard from './pages/Dashboard/DashboardPage';
import SignupPage from './pages/Signup/SignupPage';
import ClientsPage from './pages/Clients/ClientsPage';
import UsersPage from './pages/Users/UsersPage';
import BusinessPage from './pages/Business/BusinessPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="signup" component={SignupPage} />
        <Route path="clients" component={ClientsPage} />
        <Route path="users" component={UsersPage} />
        <Route path="business" component={BusinessPage} />
    </Route>
)