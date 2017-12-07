import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import withContext from 'recompose/withContext';

import { USER_LOGOUT } from 'admin-on-rest/lib/actions/authActions';

import createAppReducer from 'admin-on-rest/lib/reducer';
import { crudSaga } from 'admin-on-rest/lib/sideEffect/saga';
import DefaultLayout from 'admin-on-rest/lib/mui/layout/Layout';
import Menu from 'admin-on-rest/lib/mui/layout/Menu';
import Login from 'admin-on-rest/lib/mui/auth/Login';
import Logout from 'admin-on-rest/lib/mui/auth/Logout';
import TranslationProvider from 'admin-on-rest/lib/i18n/TranslationProvider';


import { autoRehydrate, persistStore } from 'redux-persist';
import { IntlProvider } from 'react-intl';
import thunk from 'redux-thunk';

const Admin = ({
    appLayout,
    authClient,
    children,
    customReducers = {},
    customSagas = [],
    customRoutes = [],
    dashboard,
    history,
    locale,
    messages = {},
    menu = Menu,
    catchAll,
    restClient,
    theme,
    title = 'Admin on REST',
    loginPage,
    logoutButton,
    initialState,
}) => {
    const appReducer = createAppReducer(customReducers, locale);

    const resettableAppReducer = (state, action) =>
        appReducer(action.type !== USER_LOGOUT ? state : undefined, action);


    const saga = function* rootSaga() {
        yield all([crudSaga(restClient, authClient), ...customSagas].map(fork));
    };
    const sagaMiddleware = createSagaMiddleware();
    const routerHistory = history || createHistory();

    // const persistedState = loadState();

    const store = compose(
      autoRehydrate()
    )(createStore)(
        resettableAppReducer,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware, routerMiddleware(routerHistory), thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ),

    );

    persistStore(store);
    // store.subscribe(throttle(() => {
    //   saveState({
    //     user: store.getState().user
    //   });
    // }, 10000));

    sagaMiddleware.run(saga);

    const logout = authClient ? createElement(logoutButton || Logout) : null;

    return (
        <Provider store={store}>
            <TranslationProvider messages={messages}>
              <IntlProvider locale={locale}>
                <ConnectedRouter history={routerHistory}>
                    <div>
                        <Switch>
                            <Route
                                exact
                                path="/login"
                                render={({ location }) =>
                                    createElement(loginPage || Login, {
                                        location,
                                        title,
                                        theme,
                                    })}
                            />
                            {customRoutes
                                .filter(route => route.props.noLayout)
                                .map((route, index) => (
                                    <Route
                                        key={index}
                                        exact={route.props.exact}
                                        path={route.props.path}
                                        render={({ location }) => {
                                            if (route.props.render) {
                                                return route.props.render({
                                                    location,
                                                    title,
                                                    theme,
                                                });
                                            }
                                            if (route.props.component) {
                                                return createElement(
                                                    route.props.component,
                                                    {
                                                        location,
                                                        title,
                                                        theme,
                                                    }
                                                );
                                            }
                                        }}
                                    />
                                ))}
                            <Route
                                path="/"
                                render={() =>
                                    createElement(appLayout || DefaultLayout, {
                                        children,
                                        dashboard,
                                        customRoutes: customRoutes.filter(
                                            route => !route.props.noLayout
                                        ),
                                        logout,
                                        menu,
                                        catchAll,
                                        title,
                                        theme,
                                    })}
                            />
                        </Switch>
                    </div>
                  </ConnectedRouter>
                </IntlProvider>
            </TranslationProvider>
        </Provider>
    );
};

const componentPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
]);

Admin.propTypes = {
    appLayout: componentPropType,
    authClient: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    catchAll: componentPropType,
    customSagas: PropTypes.array,
    customReducers: PropTypes.object,
    customRoutes: PropTypes.array,
    dashboard: componentPropType,
    history: PropTypes.object,
    loginPage: componentPropType,
    logoutButton: componentPropType,
    menu: componentPropType,
    restClient: PropTypes.func,
    theme: PropTypes.object,
    title: PropTypes.node,
    locale: PropTypes.string,
    messages: PropTypes.object,
    initialState: PropTypes.object,
};

export default withContext(
    {
        authClient: PropTypes.func,
    },
    ({ authClient }) => ({ authClient })
)(Admin);
