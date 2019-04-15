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

        case actionTypes.TOGGLE_LIKE:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes:
                        action.hasLiked ?
                            state[action.id].likes.filter(uid => uid !== action.authedUser)
                            : state[action.id].likes.concat(action.authedUser)
                }
            };

        default:
            return state;
    }
}