import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

import { authLoadToken } from '../redux/actions'

import Home from '../pages/home';
import About from '../pages/about';
import Users from '../pages/users';

import Login from '../pages/login';

import Layout from '../layout/layout'

import ProtectedRoute from './protectedRoute'


const Router = ({ loadToken }) => {
    useEffect(() => {
        // alert('first load')
        const token = localStorage.getItem("token");

        console.log('token', token)

        loadToken(token)

      }, []);

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <ProtectedRoute path="/about" component={About} />
                    <ProtectedRoute path="/users" component={Users} />

                    <Route path="/login" component={Login} />

                    <Route path="/" component={Home} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadToken: token => {
        dispatch(authLoadToken(token))
    }
})

export default connect(null, mapDispatchToProps)(Router);