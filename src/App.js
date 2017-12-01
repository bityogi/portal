import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import TocIcon from 'material-ui/svg-icons/action/toc';

import Menu from './custom-aor/menu';
import { restClient } from './custom-aor/restClient';
import authClient from './components/custom-aor/authClient';
import Dashboard from './components/Dashboard'
import OrganizationList from './components/organizations';
import OrderList from './components/orders'
import { ReportList, ReportCreate } from './components/reports/'
import { ProductList, ProductEdit, ProductCreate } from './components/products';
import Salesforce from './components/salesforce'




class App extends Component {

  render() {

    return (
      <Admin
        dashboard={Dashboard}
        restClient={restClient}
        title={'SimplySheets Fundraising Portal'}
        menu={Menu}
        authClient={authClient}
        >
        <Resource
          name='organizations'
          list={OrganizationList}
          icon={TocIcon}/>
        <Resource name='orders' list={OrderList} />
        <Resource name='products' list={ProductList} edit={ProductEdit} create={ProductCreate} />
        <Resource name="reports" list={ReportList} create={ReportCreate} />
        <Resource name="salesforce" list={Salesforce} />

      </Admin>
    );
  }
}

export default App;
