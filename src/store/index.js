import { createStore, applyMiddleware, compose } from 'redux';
import createLoggerMiddleware from 'redux-logger';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

function setupStore() {

  const logger = createLoggerMiddleware();

  let middlewares = [];

  if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = (middlewares.length > 0)
  ?      createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
  :      createStore(rootReducer);


  if(module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;

}

export default setupStore;
