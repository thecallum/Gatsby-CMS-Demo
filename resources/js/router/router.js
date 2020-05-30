import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

import { authLoadToken } from '../redux/actions/auth'

import Home from '../pages/home';
import About from '../pages/about';
import Users from '../pages/users';

import Login from '../pages/login';
import Logout from '../pages/logout';

import Layout from '../layout/layout'

import ProtectedRoute from './protectedRoute'


const Router = ({ loadToken }) => {
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem("token");
        loadToken(token)
        setLoading(false)
      }, []);

    return (
       <>
        {
            loading ? (
                <div></div>
            ) : (
                <BrowserRouter>
                <Layout>
                    <Switch>
                        <ProtectedRoute path="/about" component={About} />
                        <ProtectedRoute path="/users" component={Users} />
    
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
    
                        <ProtectedRoute path="/" component={Home} />
                    </Switch>
                </Layout>
            </BrowserRouter>
            )
        }
       </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loadToken: token => {
        dispatch(authLoadToken(token))
    }
})

export default connect(null, mapDispatchToProps)(Router);