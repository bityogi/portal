import React, { Component, createElement } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Resource } from 'admin-on-rest';

import Login from 'admin-on-rest/lib/mui/auth/Login';
import Logout from 'admin-on-rest/lib/mui/auth/Logout';

import CustomAdmin from './custom-aor/customAdmin';
import Menu from './custom-aor/menu';
import { restClient } from './custom-aor/restClient';
import authClient from './custom-aor/authClient';
import CustomLayout from './custom-aor/customLayout';
import theme from './custom-aor/defaultTheme';

import Dashboard from './components/dashboard/'



import ChairHome from './components/dashboard/chairDashboard';
import Campaigns from './components/campaigns';
import NewCampaign from './components/campaign';


// import customRoutes from './routes/customRoutes';


class App extends Component {


  render() {
    const dashboard = Dashboard;
    const logout = authClient ? createElement(Logout) : null;
    const menu = Menu;
    const title = 'SimplySheets Fundraising Portal';
    const locale = 'en';

    return (
      <div>
        <Switch>
          <Route
              exact
              path="/login"
              render={({ location }) =>
                  createElement(Login, {
                      location,
                      title,
                      theme,
                  })}
          />
          <Route exact path="/chair/:orgId" component={ChairHome} />
          <Route exact path="/chair/:orgId/campaigns" component={Campaigns} />
          <Route exact path="/chair/:orgId/campaigns/new" component={NewCampaign} />
          <Route
              path="/"
              render={() =>
                  createElement(CustomLayout, {
                      authClient,
                      restClient,
                      dashboard,
                      logout,
                      menu,
                      title,
                  })}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
