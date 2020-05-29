import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

const ProtectedRoute = ({ path, component, state }) => (
    <>
        {state.token === null ? (
            <Redirect to="/login/" />
        ) : (
            <Route path={path} component={component} />
        )}
    </>
)

const mapStateToProps = ({auth}) => ({
    state: {
        token: auth.token
    }
})

export default connect(mapStateToProps)(ProtectedRoute);