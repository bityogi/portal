import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import Dashboard from './components/Dashboard'
import OrganizationList from './components/organizations';
import OrderList from './components/orders'
import ReportList from './components/reports'

import TocIcon from 'material-ui/svg-icons/action/toc';

class App extends Component {

  render() {
    const url = process.env.REACT_APP_API_URL;

    return (
      <Admin
        dashboard={Dashboard}
        restClient={jsonServerRestClient(url)}
        title={'SimplySheets Fundraising Portal'}
        >
        <Resource name="organizations" list={OrganizationList} />
        <Resource name="orders" list={OrderList} />
        <Resource name="reports" list={ReportList} />
      </Admin>
    );
  }
}

export default App;
