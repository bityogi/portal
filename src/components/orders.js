import React, { Component } from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  UrlField,
  Filter,
  TextInput
 } from 'admin-on-rest';

const OrderFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Number" source="number" alwaysOn />
    <TextInput label="Status" source="status" />
    <TextInput label="Type" source="type" />
  </Filter>
)

class OrderList extends Component {

  render() {
    console.log('list props: ', this.props);

    return (
      <List
        {...this.props}
        title={'Orders'}
        filters={<OrderFilter />}>
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
