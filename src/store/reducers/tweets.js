import * as actionTypes from '../actions/actionTypes'

export default function tweets(state = {}, action) {
    switch (action.type) {
        case actionTypes.RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            };

        case actionTypes.ADD_TWEET:
            const { tweet } = action;
            return {
                ...state,
                [tweet.id]: tweet
            };

        default:
            return state;
    }
}
