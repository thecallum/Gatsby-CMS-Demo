import { ADD } from './actionTypes'

const initialState = {
    count: 0,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD: {
            return {
                ...state,
                count: state.count + action.payload.value,
            }
        }


        default:
            return state;
    }
}