import React from 'react';
import { Resource } from 'admin-on-rest';
import TocIcon from 'material-ui/svg-icons/action/toc';

import Salesforce from './components/salesforce';
import { ReportList, ReportCreate } from './components/reports/';
import OrganizationList from './components/organizations';
import OrderList from './components/orders';
import { ProductList, ProductEdit, ProductCreate } from './components/products';
import { LocationList, LocationEdit, LocationCreate } from './components/locations';

export default () => (
  [
    <Resource
      name='organizations'
      list={OrganizationList}
      icon={TocIcon}/>,

    <Resource
      name='orders'
      list={OrderList} />,

    <Resource
      name='locations'
      list={LocationList}
      edit={LocationEdit}
      create={LocationCreate} />,

    <Resource
      name='products'
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate} />,

    <Resource
      name="reports"
      list={ReportList}
      create={ReportCreate} />,

    <Resource
      name="salesforce"
      list={Salesforce} />,
  ]
)
