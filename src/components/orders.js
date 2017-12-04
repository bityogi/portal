import React, { Component } from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  DateField,
  UrlField,
  SelectField,
  Filter,
  TextInput,
  SelectInput
 } from 'admin-on-rest';

  const statusChoices = [
    { id: 'New', name: 'New' },
    { id: 'Saved', name: 'Saved' },
    { id: 'Submitted', name: 'Submitted' },
    { id: 'Pending Payment', name: 'Pending Payment' },
    { id: 'Ready for Fulfillment', name: 'Ready for Fulfillment' },
    { id: 'Sent to Fulfillment', name: 'Sent to Fulfillment' },
    { id: 'Shipped', name: 'Shipped' },
  ]

  const typeChoices = [
    { id: 'Primary', name: 'Primary' },
    { id: 'Correction', name: 'Correction' },
    { id: 'E-commerce', name: 'E-commerce' },
  ]

  const OrderFilter = (props) => (
    <Filter {...props}>
      <TextInput label="Number" source="number" alwaysOn />
      <SelectInput label="Status" source="status" choices={statusChoices} />
      <SelectInput label="Type" source="type" choices={typeChoices} />
    </Filter>
  )

  const grid_styles = {
    tr: { margin: '100px 100px' },
  }

class OrderList extends Component {

  render() {


    return (
      <List
        {...this.props}
        title={'Orders'}
        filters={<OrderFilter />}
        perPage={15}>
        <Datagrid style={grid_styles}>
          <TextField source="number" />
          <TextField label="campaign" source="campaign.name" />
          <TextField label="organization" source="campaign.organization.name" />
          <SelectField source="status" choices={statusChoices} />
          <SelectField source="type" choices={typeChoices} />
          <DateField label="Updated On" source="updatedAt" />
          <UrlField label="Edit" source="http://www.google.com" />
          <UrlField label="Details" source="http://www.google.com" />
        </Datagrid>
      </List>
    )
  }
}


export default OrderList;
