import React, { Component } from 'react';
import { TiHeartOutline, TiHeartFullOutline, TiArrowBackOutline } from 'react-icons/ti/'
import { formatDate } from '../utils/helpers'
import { Link } from 'react-router-dom';

class TweedCard extends Component {

    render() {

        const { id, name, avatar, timestamp, text, hasLiked, likes, replies, parent } = this.props.tweet;

        return (
            <Link to={`/tweet/${id}`} className='tweet'>
                <img src={avatar} alt={`Avatar of ${name}`} className='avatar' />
                <div className='tweet-info'>
                    <div>
                        <span>{name}</span>
                        <div>{formatDate(timestamp)}</div>
                        {parent ? <button className='replying-to'>Replying to @{parent.author}</button> : null}
                        <p>{text}</p>
                        <div className='tweet-icons'>
                            <TiArrowBackOutline className='tweet-icon' />
                            <span>{replies ? replies : null}</span>
                            <button onClick={this.props.handleLike} className='heart-button'>
                                {hasLiked ?
                                    <TiHeartFullOutline color='#E0245E' className='tweet-icon' />
                                    : <TiHeartOutline className='tweet-icon' />
                                }
                            </button>
                            <span>{likes ? likes : null}</span>
                        </div>
                    </div>
                </div>
            </Link>

        )
    }
}

export default TweedCard