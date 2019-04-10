import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TweetList from '../containers/TweetList'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact component={TweetList} />
            </BrowserRouter>
        )
    }
}

export default App