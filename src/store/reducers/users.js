import * as actionTypes from '../actions/actionTypes'

export default function users(state = {}, action) {
    switch (action.type) {
        case actionTypes.RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };
        default:
            return state;
    }
}
