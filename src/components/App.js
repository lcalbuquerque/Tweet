import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TweetList from '../containers/TweetList'
import BarraNaveg from './BarraNaveg'
import NewTweet from '../containers/NewTweet'
import LoadingBar from 'react-redux-loading-bar'
import TweetReply from '../containers/TweetReply'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <LoadingBar scope="sectionBar" />
                    <BarraNaveg />
                    <Route path="/" exact component={TweetList} />
                    <Route path="/new" component={NewTweet} />
                    <Route path="/tweet/:id" component={TweetReply} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App