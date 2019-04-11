import * as actionTypes from './actionTypes'

export function setAuthedUser(id) {
    return {
        type: actionTypes.SET_AUTHED_USER,
        id
    };
}
