import { ADD } from './actionTypes'

export const add = (value) => ({
    type: ADD,
    payload: {
        value
    }
})