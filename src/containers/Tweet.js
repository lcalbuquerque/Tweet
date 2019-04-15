import React, { Component } from 'react'
import { formatTweet, formatDate } from '../utils/helpers'
import { connect } from 'react-redux'
import { TiHeartOutline, TiHeartFullOutline, TiArrowBackOutline } from 'react-icons/ti/'
import { handleToggleLike } from '../store/actions/tweets'
import { Link } from "react-router-dom";

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
        const { id, name, avatar, timestamp, text, hasLiked, likes, replies, parent } = tweet;

        return (
            <Link to={`/tweet/${id}`} className="tweet">
                <img src={avatar} alt='teste' className="avatar" />
                <div className="tweet-info">
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent ? <button className='replying-to'>Replying to @{parent.author}</button> : null }
                        <p>{text}</p>
                        <div className='tweet-icons'>
                            <TiArrowBackOutline className="tweet-icon" />
                            <span>{replies ? replies : null}</span>
                            <button onClick={this.handleLike} className='heart-button'>
                                {hasLiked ?
                                    <TiHeartFullOutline color="#E0245E" className="tweet-icon" />
                                    : <TiHeartOutline className="tweet-icon" />
                                }
                            </button>
                            <span>{likes ? likes : null}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet ?
            formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            : null
    };
}

export default connect(mapStateToProps)(Tweet);