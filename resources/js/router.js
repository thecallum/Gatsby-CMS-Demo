import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';

import Login from './pages/login';

import Layout from './layout/layout'

import ProtectedRoute from './protectedRoute'


export default () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <ProtectedRoute path="/about" component={About} />
                    <ProtectedRoute path="/users" component={Users} />

                    <Route path="/login" component={Login} />

                    <Route path="/" component={Home} />
                </Switch>
            </Layout>
        </Router>
    )
}