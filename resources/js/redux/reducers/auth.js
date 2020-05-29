import { AUTH_SUCCESS, AUTH_ERROR, AUTH_LOADING } from '../actionTypes'


const initialState = {
    token: null,
    error: null,
    loading: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case AUTH_SUCCESS: {
            return {
                ...state,
                token: action.payload.token,
                error: null,
                loading: false,
            }
        }

        case AUTH_ERROR: {
            return {
                ...state,
                error: action.payload.error,
                loading: false
            }
        }

        case AUTH_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        default:
            return state;
    }

}