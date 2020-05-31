import { ADD } from '../actionTypes/main'

export const add = (value) => ({
    type: ADD,
    payload: {
        value
    }
})