import * as actionTypes from './actionTypes'
import { saveTweet, saveLikeToggle } from '../../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function receiveTweets(tweets) {
    return {
        type: actionTypes.RECEIVE_TWEETS,
        tweets
    };
}

function addTweet(tweet) {
    return {
        type: actionTypes.NEW_TWEET,
        tweet
    };
}

export function handleAddTweet(tweet) {
    return (dispatch, getState) => {
        dispatch(showLoading('sectionBar'));
        const { authedUser } = getState();
        const { text, id } = tweet;
        return saveTweet({
            text,
            author: authedUser,
            replyingTo: id
        })
            .then(tweet => {
                dispatch(addTweet(tweet))
                dispatch(hideLoading('sectionBar'));
            })
            .catch((e) => {
                console.warn('Error in handleAddTweet: ', e);
                alert('Ocorreu um erro ao incluir novo tweet. Tente novamente. ')
            });
    }
}

export function handleToggleLike(info) {
    // ...info = { id, authedUser, hasLiked }
    const like = {
        type: actionTypes.TOGGLE_LIKE,
        ...info
    }

    return dispatch => {
        saveLikeToggle(info)
            .then(() => { dispatch(like); })
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e);
                alert('Ocorreu um erro ao curtir o tweet. Tente novamente. ')
            });
    }
}