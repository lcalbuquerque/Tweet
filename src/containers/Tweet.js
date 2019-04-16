import React, { Component } from 'react'
import { formatTweet } from '../utils/helpers'
import { connect } from 'react-redux'
import { handleToggleLike } from '../store/actions/tweets'
import TweedCard from '../components/Tweetcard'

class Tweet extends Component {

    handleLike = e => {
        e.preventDefault();
        const { dispatch, tweet, authedUser } = this.props;
        dispatch(
            handleToggleLike({
                id: tweet.id,
                authedUser: authedUser,
                hasLiked: tweet.hasLiked
            })
        );
    };

    render() {
        const { tweet } = this.props;
        return (
            <TweedCard tweet={tweet} handleLike={this.handleLike} />
        );
    }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id];
    const parentTweet = tweets[tweet.replyingTo];

    return {
        authedUser,
        tweet: formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
    };
}

export default connect(mapStateToProps)(Tweet);