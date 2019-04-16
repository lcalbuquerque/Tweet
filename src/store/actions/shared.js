import { getInitialData } from '../../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const AUTHED_ID = 'luis_albuquerque';

export function handleInitialData() {
    return dispatch => {
        dispatch(showLoading('sectionBar'));
        return getInitialData().then(({ users, tweets }) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthedUser(AUTHED_ID));
            dispatch(hideLoading('sectionBar'));
        });
    };
}
