import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';

import Layout from './layout/layout'

export default () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                    <Route path="/" component={Home} />
                </Switch>
            </Layout>
        </Router>
    )
}