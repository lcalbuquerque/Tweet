import { combineReducers } from "redux";
import users from "../reducers/users";
import tweets from "../reducers/tweets";

export default combineReducers({
  users,
  tweets
});
