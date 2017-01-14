import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/Pages/App';
import HomePage from './components/Pages/Homepage/Index';
import Dashboard from './components/Pages/Dashboard/DashboardPage';
import SigninPage from './components/Pages/Signin/SigninPage';
import SignupPage from './components/Pages/Signup/SignupPage';
import ClientsPage from './components/Pages/Clients/ClientsPage';
import UsersPage from './components/Pages/Users/UsersPage';
import BusinessPage from './components/Pages/Business/BusinessPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="clients" component={ClientsPage} />
        <Route path="users" component={UsersPage} />
        <Route path="business" component={BusinessPage} />
        <Route path="signin" component={SigninPage} />
        <Route path="signup" component={SignupPage} />
    </Route>
)