import { AUTH_SUCCESS, AUTH_ERROR, AUTH_LOADING, AUTH_LOAD_TOKEN, AUTH_LOGOUT } from '../actionTypes/auth'

const authLoading = () => ({
    type: AUTH_LOADING,
})

const authSuccess = token => ({
    type: AUTH_SUCCESS,
    payload: {
        token
    }
})

const authError = errorMessage => ({
    type: AUTH_ERROR,
    payload: {
        error: errorMessage
    }
})

export const authLogin = (email, password) => {
    return (dispatch) => {
        dispatch(authLoading())

        fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(res => {
                if (res.hasOwnProperty('access_token')) {
                    dispatch(authSuccess(res.access_token))
                    localStorage.setItem("token", res.access_token);
                } else {
                    dispatch(authError(res.error))
                }
            })
            .catch(err => {
                console.log({err})
                dispatch(authError('Oops! Something went wrong.'))
            })
    }
}

export const authLoadToken = token => ({
    type: AUTH_LOAD_TOKEN,
    payload: {
        token
    }
})

const authRemoveToken = () => ({
    type: AUTH_LOGOUT
})

export const authLogout = () => {
    return (dispatch) => {
        
        fetch('http://localhost:8000/api/auth/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .finally(() => {
                dispatch(authRemoveToken())
            })

    }
}