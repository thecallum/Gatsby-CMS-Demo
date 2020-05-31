import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { authLogout } from '../redux/actions/auth'
import { Redirect } from 'react-router-dom'

const Logout = ({ state, actions }) => {

    useEffect(() => {
        actions.authLogout()
      }, []);


    return (
        <>
            {
                state.token === null && (
                    <Redirect to="/login/"/>
                )
            }
        </>
    )
}

const mapStateToProps = ({ auth }) => ({
    state: {
        token: auth.token
    }
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        authLogout: () => {
            dispatch(authLogout())
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);