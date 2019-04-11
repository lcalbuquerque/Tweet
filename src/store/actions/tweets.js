import * as actionTypes from './actionTypes'
import { saveTweet } from '../../utils/api'

export function receiveTweets(tweets) {
    return {
        type: actionTypes.RECEIVE_TWEETS,
    tweets
  };
}

function addTweet(tweet) {
    return {
        type: actionTypes.ADD_TWEET,
        tweet
    };
}

export function handleAddTweet(tweet) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const { text } = tweet;
        return saveTweet({
            text,
            author: authedUser
        })
            .then(tweet => dispatch(addTweet(tweet)))
    };
}