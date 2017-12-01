import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import TocIcon from 'material-ui/svg-icons/action/toc';

import Menu from './custom-aor/menu';
import { restClient } from './custom-aor/restClient';
import authClient from './custom-aor/authClient';
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
        {permissions => {

          console.log('permissions: ', permissions);

          return [


          permissions.includes('Chair') ?
            <Resource
              name='organizations'
              list={OrganizationList}
              icon={TocIcon}/>
            : null,

          permissions.includes('Admin') ?
            <Resource name='orders' list={OrderList} />
            : null,

          permissions.includes('Admin') ?
            <Resource name='products' list={ProductList} edit={ProductEdit} create={ProductCreate} />
            : null,

          permissions.includes('Admin') ?
            <Resource name="reports" list={ReportList} create={ReportCreate} />
            : null,

          <Resource name="salesforce" list={Salesforce} />,

        ]}}









      </Admin>
    );
  }
}

export default App;
