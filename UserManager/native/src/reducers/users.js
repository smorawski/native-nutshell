import { createReducer } from 'redux-create-reducer';
import {
    GET_USERS_REQUEST,
    GET_USERS_REQUEST_SUCCESS,
    GET_USERS_REQUEST_FAILURE,
    CREATE_USER_REQUEST_SUCCESS,
    CREATE_USER_REQUEST_FAILURE,
    DELETE_USER_REQUEST_SUCCESS,
    DELETE_USER_REQUEST_FAILURE,
} from '../actions/users';


const initialState = {
    isFetching: false,
    error: false,
    data: [],
};

const users = createReducer(initialState, {
    [GET_USERS_REQUEST](state) {
        return {
            ...state,
            isFetching: true,
        };
    },
    [GET_USERS_REQUEST_SUCCESS](state, action) {
        return {
            ...state,
            isFetching: false,
            data: action.result.payload,
        }
    },
    [CREATE_USER_REQUEST_FAILURE](state, error) {
        console.error(error);
        return state;
    },
    [GET_USERS_REQUEST_FAILURE](state, error) {
        return {
            ...state,
            isFetching: false,
            data: [],
            error,
        }
    },
    [CREATE_USER_REQUEST_SUCCESS](state, action) {
        console.log(action);
        return {
            ...state,
            isFetching: false,
            data: [...state.data, action.result.payload],
        };
    }
});

export default users;
