import { combineReducers } from 'redux'
import users from '../reducers/users'
import tweets from '../reducers/tweets'
import authedUser from '../reducers/authedUser'
import { loadingBarReducer } from 'react-redux-loading-bar' 

export default combineReducers({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer,
});