import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import TocIcon from 'material-ui/svg-icons/action/toc';
import { withRouter } from 'react-router-dom';

import CustomAdmin from './custom-aor/customAdmin';
import Menu from './custom-aor/menu';
import { restClient } from './custom-aor/restClient';
import authClient from './custom-aor/authClient';
import CustomLayout from './custom-aor/customLayout';
import Dashboard from './components/dashboard/'
import OrganizationList from './components/organizations';
import OrderList from './components/orders'
import { ReportList, ReportCreate } from './components/reports/'
import { ProductList, ProductEdit, ProductCreate } from './components/products';
import { LocationList, LocationEdit, LocationCreate } from './components/locations';

import Salesforce from './components/salesforce';
import customRoutes from './routes/customRoutes';


class App extends Component {

  render() {

    return (
      <CustomAdmin
        dashboard={Dashboard}
        restClient={restClient}
        title={'SimplySheets Fundraising Portal'}
        menu={Menu}
        authClient={authClient}
        appLayout={CustomLayout}
        locale={'en'}
        customRoutes={customRoutes}
        >
        {permissions => {

          console.log('permissions: ', permissions);

          return [


          permissions.includes('Admin') ?
            <Resource
              name='organizations'
              list={OrganizationList}
              icon={TocIcon}/>
            : null,

          permissions.includes('Admin') ?
            <Resource name='orders' list={OrderList} />
            : null,

          permissions.includes('Admin') ?
            <Resource name='locations' list={LocationList} edit={LocationEdit} create={LocationCreate} />
            : null,

          permissions.includes('Admin') ?
            <Resource name='products' list={ProductList} edit={ProductEdit} create={ProductCreate} />
            : null,

          permissions.includes('Admin') ?
            <Resource name="reports" list={ReportList} create={ReportCreate} />
            : null,

          <Resource name="salesforce" list={Salesforce} />,

        ]}}

      </CustomAdmin>
    );
  }
}

export default withRouter(App);
