import React, { Component } from 'react';
import { formatTweet, formatDate } from '../utils/helpers';
import { connect } from 'react-redux';

class Tweet extends Component {

    render() {
        const { tweet } = this.props;
        const { name, avatar, timestamp, text } = tweet;
        return (
            <div className="tweet">
                <img src={avatar} alt='teste' className="avatar" />
                <div className="tweet-info">
                    <span>{name}</span>
                    <div>{formatDate(timestamp)}</div>
                    <p>{text}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users, tweets }, { id }) {
    const tweet = tweets[id];
    return {
        tweet: formatTweet(tweet, users[tweet.author])
    };
}


export default connect(mapStateToProps)(Tweet);

