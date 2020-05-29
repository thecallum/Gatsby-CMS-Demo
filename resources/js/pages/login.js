import React, { useState } from 'react'

export default () => {
    const [loading, setLoading] = useState(false);
    const [fields, setFields] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null)

    const login = (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true)
        setError(null)

        fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json'
              },
        })
            .then(res => res.json())
            .then(res => {
                if (res.hasOwnProperty('error')) {
                    setError(res.error)
                } else {
                    // success
                }
            })
            .catch(err => {
                console.log({err})
                setError('Oops! Something went wrong.')
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const inputChange = e => {
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={login}>

                <div className="form-group">
                    <label htmlFor="email_input">Email</label>
                    <input type="text" className="form-control" name="email" id="email_input" value={fields.email} onChange={inputChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password_input">Password</label>
                    <input type="password" className="form-control" name="password" id="password_input" value={fields.password} onChange={inputChange}/>
                </div>

                {error && (
                    <div className="alert alert-danger">
                    <ul>
                        <li>{ error }</li>
                    </ul>
                </div>
                )}

                {loading && <p>Loading...</p>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

        </div>
    )
}