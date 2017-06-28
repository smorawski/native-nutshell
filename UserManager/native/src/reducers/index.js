import { combineReducers } from 'redux';
import users from './users';

const reducers = combineReducers({
    users,
});

export default function(state, action) {
    return reducers(state || {}, action);
};
