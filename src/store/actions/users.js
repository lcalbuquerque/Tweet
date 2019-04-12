import * as actionTypes from './actionTypes'

export function receiveUsers(users) {
    return {
        type: actionTypes.RECEIVE_USERS,
        users
    };
}