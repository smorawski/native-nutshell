import { createStore, compose, applyMiddleware } from 'redux';
import middleware from './middleware';
import reducers from '../reducers';

export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, compose(
        applyMiddleware(middleware)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
