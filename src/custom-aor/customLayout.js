import React, { createElement, Component } from 'react';
import PropTypes from 'prop-types';
import withContext from 'recompose/withContext';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import {
  AdminRoutes,
  Menu,
  Notification,
  Sidebar,
  setSidebarVisibility as setSidebarVisibilityAction
} from 'admin-on-rest';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import autoprefixer from 'material-ui/utils/autoprefixer';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';

import defaultTheme from './defaultTheme';
import CustomAppBar from './customAppBar';

const styles = {
  wrapper: {
        // Avoid IE bug with Flexbox, see #467
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    body: {
        backgroundColor: '#edecec',
        display: 'flex',
        flex: 1,
        overflowY: 'hidden',
        overflowX: 'scroll',
    },
    content: {
        flex: 1,
        padding: '2em',
    },
    loader: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 16,
        zIndex: 1200,
    },
};

const prefixedStyles = {};

class CustomLayout extends Component {
  componentWillMount() {
    if (this.props.width !== 1) {
      this.props.setSidebarVisibility(true);
    }
  }

  render() {
    const {
      children,
      customRoutes,
      dashboard,
      isLoading,
      logout,
      menu,
      catchAll,
      theme,
      title,
      width,
      authClient
    } = this.props;

    console.log('authClient: ', authClient);

    const muiTheme = getMuiTheme(theme);
    if (!prefixedStyles.main) {
      const prefix = autoprefixer(muiTheme);
      prefixedStyles.wrapper = prefix(styles.wrapper);
      prefixedStyles.main = prefix(styles.main);
      prefixedStyles.body = prefix(styles.body);
      prefixedStyles.bodySmall = prefix(styles.bodySmall);
      prefixedStyles.content = prefix(styles.content);
      prefixedStyles.contentSmall = prefix(styles.contentSmall);
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={prefixedStyles.wrapper}>
          <div style={prefixedStyles.main}>
            <CustomAppBar title={title} logout={logout} authClient={authClient} />
            <div
              className="body"
              style={
                width === 1 ? ( prefixedStyles.bodySmall) : (prefixedStyles.body)
              }
            >
              <div style={
                  width === 1 ? (prefixedStyles.contentSmall) : (prefixedStyles.content)
                }
              >
                <AdminRoutes
                  customRoutes={customRoutes}
                  dashboard={dashboard}
                  catchAll={catchAll}
                >
                {children}
                </AdminRoutes>
              </div>
              <Sidebar>
                {createElement(menu || Menu, {
                  logout,
                  hasDashboard: !!dashboard,
                })}
              </Sidebar>
            </div>
            <Notification />

            {isLoading && (
              <CircularProgress
                color="#fff"
                size={width === 1 ? 20 : 30}
                thickness={2}
                style={styles.loader}
              />
            )}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const componentPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
]);

CustomLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  catchAll: componentPropType,
  authClient: PropTypes.func,
  customRoutes: PropTypes.array,
  dashboard: componentPropType,
  isLoading: PropTypes.bool.isRequired,
  logout: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
    ]),
  menu: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  resources: PropTypes.array,
  setSidebarVisibility: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  width: PropTypes.number,
}

CustomLayout.defaultProps = {
    theme: defaultTheme,
};


const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const enhance = compose(
  withContext(
      {
          authClient: PropTypes.func,
      },
      ({ authClient }) => ({ authClient })
  ),
  connect(mapStateToProps, {
    setSidebarVisibility: setSidebarVisibilityAction
  }),
  withWidth()
);

export default enhance(CustomLayout);
