import React, { Component } from 'react'
import { formatTweet, formatDate } from '../utils/helpers'
import { connect } from 'react-redux'
import { TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti/'
import { handleToggleTweet } from '../store/actions/tweets'

class Tweet extends Component {

    handleLike = e => {
        e.preventDefault();
        const { dispatch, tweet, authedUser } = this.props;
        dispatch(
            handleToggleTweet({
                id: tweet.id,
                authedUser: authedUser,
                hasLiked: tweet.hasLiked
            })
        );
    };

    render() {

        const { tweet } = this.props;
        const { name, avatar, timestamp, text, hasLiked, likes } = tweet;

        return (
            <div className="tweet">
                <img src={avatar} alt='teste' className="avatar" />
                <div className="tweet-info">
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        <p>{text}</p>
                        <div className='tweet-icons'>
                            <button onClick={this.handleLike} className='heart-button'>
                                {hasLiked ?
                                    <TiHeartFullOutline color="#E0245E" className="tweet-icon" />
                                    : <TiHeartOutline className="tweet-icon" />
                                }
                            </button>
                            <span>{likes > 0 && likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id];

    return {
        authedUser,
        tweet: tweet ?
            formatTweet(tweet, users[tweet.author], authedUser)
            : null
    };
}

export default connect(mapStateToProps)(Tweet);