import React, { Component } from 'react';
import { formatTweet, formatDate } from '../utils/helpers';
import { connect } from 'react-redux';

class Tweet extends Component {

    render() {
        const { tweet } = this.props;
        const {
            name,
            avatar,
            timestamp,
            text
        } = tweet;
        return (
            <div className="tweet">
                <img src={avatar} alt='teste' className="avatar" />
                <div className="tweet-info">
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet
            ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    };
}

export default connect(mapStateToProps)(Tweet);