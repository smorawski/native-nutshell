export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_REQUEST_SUCCESS = 'GET_USERS_REQUEST_SUCCESS';
export const GET_USERS_REQUEST_FAILURE = 'GET_USERS_REQUEST_FAILURE';

export const get = () =>  ({
    types: [GET_USERS_REQUEST, GET_USERS_REQUEST_SUCCESS, GET_USERS_REQUEST_FAILURE],
    promise: ({client}) => client.get(),
});

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_REQUEST_SUCCESS = 'CREATE_USER_REQUEST_SUCCESS';
export const CREATE_USER_REQUEST_FAILURE = 'CREATE_USER_REQUEST_FAILURE';

export const create = (data) =>  ({
    types: [CREATE_USER_REQUEST, CREATE_USER_REQUEST_SUCCESS, CREATE_USER_REQUEST_FAILURE],
    promise: ({client}) => client.create(data),
});

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_REQUEST_SUCCESS = 'DELETE_USER_REQUEST_SUCCESS';
export const DELETE_USER_REQUEST_FAILURE = 'DELETE_USER_REQUEST_FAILURE';

export const remove = (data) =>  ({
    types: [DELETE_USER_REQUEST, DELETE_USER_REQUEST_SUCCESS, DELETE_USER_REQUEST_FAILURE],
    promise: ({client}) => client.delete(data),
});
