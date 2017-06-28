import Fetcher from '../utils/fetcher';

export default function reduxPromiseMiddleware({ dispatch, getState }) {
  return next => action => {
    const { promise, data, types, type, ...rest } = action;
    if (!promise) {
      return next(action);
    }
    let REQUEST;
    let SUCCESS;
    let FAILURE;
    if (type) {
      REQUEST = SUCCESS = FAILURE = type;
    }
    if (types && types.length === 3) {
      [REQUEST, SUCCESS, FAILURE] = types;
    }
    next({ ...rest, type: REQUEST });
    return promise({client: Fetcher, getState, dispatch})
        .then(result => next({ ...rest, result, type: SUCCESS }))
        .catch(error => next({ ...rest, error, type: FAILURE }));
  };
}
