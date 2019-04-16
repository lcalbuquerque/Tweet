import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar'
import TweetList from './containers/TweetList'
import BarraNaveg from './components/BarraNaveg'
import NewTweet from './containers/NewTweet'
import TweetReply from './containers/TweetReply'
import { handleInitialData } from './store/actions/shared'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <BrowserRouter>
                <div className='container'>
                    <LoadingBar scope='sectionBar' />
                    <BarraNaveg />
                    <Route path='/' exact component={TweetList} />
                    <Route path='/new' component={NewTweet} />
                    <Route path='/tweet/:id' component={TweetReply} />
                </div>
            </BrowserRouter>
        )
    }
}

export default connect()(App);