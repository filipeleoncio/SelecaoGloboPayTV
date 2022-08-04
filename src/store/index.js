import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSagas from './sagas';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

middlewares.push(sagaMiddleware);

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

rootSagas.map((saga) => sagaMiddleware.run(saga));

export default store;
