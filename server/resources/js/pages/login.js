import React, { useState } from "react";
import Layout from "../layout/main/";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { authLogin } from "../redux/actions/auth";

const Login = ({ state, authLogin }) => {
    const [fields, setFields] = useState({
        email: "",
        password: ""
    });

    const [active, setActive] = useState(false);

    const login = e => {
        e.preventDefault();

        setActive(true);

        if (state.loading) return;

        authLogin(fields.email, fields.password);
    };

    const inputChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Layout>
            {active && state.token !== null && <Redirect to="/" />}

            <h1>Login</h1>

            {/* <p>Token: {state.token}</p>
            <p>Error: {state.error}</p>
            <p>Loading: {state.loading}</p> */}

            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="email_input">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email_input"
                        value={fields.email}
                        onChange={inputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password_input">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password_input"
                        value={fields.password}
                        onChange={inputChange}
                    />
                </div>

                {state.error && (
                    <div className="alert alert-danger">
                        <ul>
                            <li>{state.error}</li>
                        </ul>
                    </div>
                )}

                {state.loading && <p>Loading...</p>}
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </Layout>
    );
};

const mapStateToProps = ({ auth }) => ({
    state: {
        token: auth.token,
        error: auth.error,
        loading: auth.loading
    }
});

const mapDispatchToProps = dispatch => ({
    authLogin: (email, password) => {
        dispatch(authLogin(email, password));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
