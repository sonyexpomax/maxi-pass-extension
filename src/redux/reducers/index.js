import { combineReducers } from 'redux';
import listsReducer from './listsReducer';
import userReducer from './userReducer';
import pageReducer from './pageReducer';
import loginsReducer from './loginsReducer';

export default combineReducers({
    lists: listsReducer,
    user: userReducer,
    page: pageReducer,
    logins: loginsReducer,
});
