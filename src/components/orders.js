import React, { Component } from 'react';
import { List, Datagrid, TextField, BooleanField, DateField, UrlField } from 'admin-on-rest';

class OrderList extends Component {

  render() {
    console.log('list props: ', this.props);

    return (
      <List {...this.props} title={'Orders'}>
        <Datagrid>
          <TextField source="number" />
          <TextField label="campaign" source="campaign.name" />
          <TextField label="organization" source="campaign.organization.name" />
          <TextField source="status" />
          <TextField source="type" />
          <DateField label="Updated On" source="updatedAt" />
          <UrlField label="Edit" source="http://www.google.com" />
          <UrlField label="Details" source="http://www.google.com" />
        </Datagrid>
      </List>
    )
  }
}


export default OrderList;
