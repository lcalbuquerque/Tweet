import * as actionTypes from './actionTypes'

export function receiveTweets(tweets) {
    return {
        type: actionTypes.RECEIVE_TWEETS,
    tweets
  };
}
