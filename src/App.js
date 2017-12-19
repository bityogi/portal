import React, { Component, createElement } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import withContext from 'recompose/withContext';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import autoprefixer from 'material-ui/utils/autoprefixer';
import CircularProgress from 'material-ui/CircularProgress';
import withWidth from 'material-ui/utils/withWidth';

import {
  AdminRoutes,
  Notification,
  Sidebar,
  setSidebarVisibility as setSidebarVisibilityAction,
  Resource
} from 'admin-on-rest';

import Login from 'admin-on-rest/lib/mui/auth/Login';
import Logout from 'admin-on-rest/lib/mui/auth/Logout';

import CustomAdmin from './custom-aor/customAdmin';
import Menu from './custom-aor/menu';
import { restClient } from './custom-aor/restClient';
import authClient from './custom-aor/authClient';
import CustomLayout from './custom-aor/customLayout';
import defaultTheme from './custom-aor/defaultTheme';
import CustomAppBar from './custom-aor/customAppBar';

import Dashboard from './components/dashboard/'



import ChairHome from './components/dashboard/chairDashboard';
import Campaigns from './components/campaigns';
import NewCampaign from './components/campaign';


import OrganizationList from './components/organizations';
import OrderList from './components/orders'
import { ReportList, ReportCreate } from './components/reports/'
import { ProductList, ProductEdit, ProductCreate } from './components/products';
import { LocationList, LocationEdit, LocationCreate } from './components/locations';

import Salesforce from './components/salesforce';

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

const login = () => (
  <div>Login Page</div>
);

class App extends Component {


  render() {

    const {
      children,
      // customRoutes,
      // dashboard,
      isLoading,
      // logout,
      // menu,
      catchAll,
      // theme,
      // title,
      width,
      authClient
    } = this.props;
    const theme = defaultTheme;

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

    const dashboard = Dashboard;
    const logout = authClient ? createElement(Logout) : null;
    const menu = Menu;
    const title = 'SimplySheets Fundraising Portal';
    const locale = 'en';
    const customRoutes = [];

    return (

      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <CustomAppBar title="My Admin" authclient={authClient} />
          <Switch>
             <Route exact path="/" component={Dashboard} />
             <Route exact path="/orders" hasCreate render={(routeProps) => <OrderList resource="posts" {...routeProps} />} />
             <Route exact path="/organizations" hasCreate render={(routeProps) => <OrganizationList resource="organizations" {...routeProps} />} />
             <Route exact path="/login" component={login} />
          </Switch>
        </div>
      </MuiThemeProvider>


    );
  }
}



const mapStateToProps = state => ({ isLoading: state.admin.loading > 0 });

const mapDispatchToProps = dispatch => bindActionCreators({
  setSidebarVisibility: setSidebarVisibilityAction,
  authClient
}, dispatch)

const enhance = compose(
  // withContext(
  //     {
  //         authClient: PropTypes.func,
  //     },
  //     ({ authClient }) => ({ authClient })
  // ),
  connect(mapStateToProps, mapDispatchToProps),
  withWidth()
);

export default enhance(App);

// export default withRouter(App);
