import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import { handleInitialData } from '../store/actions/shared'

class TweetList extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <div>
                <h3 className="center">Your Timeline</h3>
                <ul>
                    {
                        this.props.tweetsMap.map(id => (
                            <li key={id}>
                                <Tweet id={id} />
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ tweets }) {
    return {
        tweetsMap: Object.keys(tweets).sort((a, b) => {
            return tweets[b].timestamp - tweets[a].timestamp;
        })
    }
}

export default connect(mapStateToProps)(TweetList);