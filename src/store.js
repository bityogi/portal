import { createStore, applyMiddleware, compose } from 'redux';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createHashHistory';
import { autoRehydrate, persistStore } from 'redux-persist';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { USER_LOGOUT } from 'admin-on-rest/lib/actions/authActions';
import createAppReducer from 'admin-on-rest/lib/reducer';
import { crudSaga } from 'admin-on-rest/lib/sideEffect/saga';

import customReducers from './reducers';
import authClient from './custom-aor/authClient';
import { restClient } from './custom-aor/restClient';
import customSagas from './sagas';

const locale = 'en';

const appReducer = createAppReducer(customReducers, locale);

const resettableAppReducer = (state, action) =>
    appReducer(action.type !== USER_LOGOUT ? state : undefined, action);


const saga = function* rootSaga() {
    yield all([crudSaga(restClient, authClient), ...customSagas].map(fork));
};
const sagaMiddleware = createSagaMiddleware();
const routerHistory = createHistory();

const store = compose(
  autoRehydrate()
)(createStore)(
    resettableAppReducer,
    compose(
        applyMiddleware(sagaMiddleware, routerMiddleware(routerHistory), thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ),

);

persistStore(store);


sagaMiddleware.run(saga);

export default store;
