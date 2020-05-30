import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";

import { authLoadToken } from '../redux/actions/auth'

import Home from '../pages/home';
// import Pages from '../pages/pages';
import PageRoutes from './PageRoutes'
import PageNotFound from '../pages/404'

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
                        <ProtectedRoute path="/pages/" component={PageRoutes} />
    
                        <Route path="/login/" component={Login} />
                        <Route path="/logout/" component={Logout} />
    
                        <ProtectedRoute path="/" component={Home} exact />

                        <Route component={PageNotFound}/>

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