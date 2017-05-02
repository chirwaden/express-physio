import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/Pages/App';
import HomePage from './components/Pages/Homepage/Index';
import Dashboard from './components/Pages/Dashboard/DashboardPage';
import SigninPage from './components/Pages/Signin/SigninPage';
import SignupPage from './components/Pages/Signup/SignupPage';
import ClientsPage from './components/Pages/Clients/ClientsPage';
import UsersPage from './components/Pages/Users/UsersPage';
import UsersProfilePage from './components/Pages/Users/UsersProfilePage';
import BusinessPage from './components/Pages/Business/BusinessPage';
import NotFoundPage from './components/Pages/NotFound/Index';
import RequireAuth from './components/Auth/require-auth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="dashboard" component={RequireAuth(Dashboard)} />
        <Route path="clients" component={RequireAuth(ClientsPage)} />
        <Route path="users" component={RequireAuth(UsersPage)} />
        <Route path="userProfile" component={RequireAuth(UsersProfilePage)} />
        <Route path="business" component={RequireAuth(BusinessPage)} />
        <Route path="signin" component={SigninPage} />
        <Route path="signup" component={SignupPage} />
    </Route>
)