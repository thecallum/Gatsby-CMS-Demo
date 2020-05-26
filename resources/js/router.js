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

export default () => (
    <Router>
        <header>
            <div>App</div>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/users/">Users</Link></li>
            </ul>
        </header>


        <Switch>
          <Route path="/about" component={About} />

          <Route path="/users" component={Users} />

          <Route path="/" component={Home} />
        </Switch>

    </Router>
)