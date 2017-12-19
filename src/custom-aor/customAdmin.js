import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';

import withContext from 'recompose/withContext';


import DefaultLayout from 'admin-on-rest/lib/mui/layout/Layout';
import Menu from 'admin-on-rest/lib/mui/layout/Menu';
import Login from 'admin-on-rest/lib/mui/auth/Login';
import Logout from 'admin-on-rest/lib/mui/auth/Logout';


const Admin = ({
    appLayout,
    authClient,
    children,
    customRoutes = [],
    dashboard,
    locale,
    menu = Menu,
    catchAll,
    restClient,
    theme,
    title = 'Admin on REST',
    loginPage,
    logoutButton,
}) => {


    const logout = authClient ? createElement(logoutButton || Logout) : null;

    return (
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
                            })}
                    />
                </Switch>
              </div>
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
    customRoutes: PropTypes.array,
    dashboard: componentPropType,
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
