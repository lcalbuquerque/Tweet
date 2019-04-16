import * as actionTypes from '../actions/actionTypes'

export default function tweets(state = {}, action) {
    switch (action.type) {
        case actionTypes.RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            };

        case actionTypes.NEW_TWEET:
            const { tweet } = action;
            let replyingTo = {};
            // If is a Reply, full replyingTo and replies
            if (tweet.replyingTo !== null) {
                replyingTo = {
                    [tweet.replyingTo]: {
                        ...state[tweet.replyingTo],
                        replies: state[tweet.replyingTo].replies.concat([tweet.id])
                    }
                };
            }
            return {
                ...state,
                [tweet.id]: tweet,
                ...replyingTo
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