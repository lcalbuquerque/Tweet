import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TweetList from '../containers/TweetList'
import BarraNaveg from './BarraNaveg'
import NewTweet from './NewTweet'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <BarraNaveg />
                    <Route path="/" exact component={TweetList} />
                    <Route path="/new" exact component={NewTweet} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App