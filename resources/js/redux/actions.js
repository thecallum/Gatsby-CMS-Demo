import { ADD, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOADING } from './actionTypes'

export const add = (value) => ({
    type: ADD,
    payload: {
        value
    }
})

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
            headers: {
                'Content-Type': 'application/json'
              },
        })
            .then(res => res.json())
            .then(res => {
                if (res.hasOwnProperty('access_token')) {
                    dispatch(authSuccess(res.access_token))
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