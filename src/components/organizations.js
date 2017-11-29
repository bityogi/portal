import React, { Component} from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  UrlField,
  Filter,
  TextInput
 } from 'admin-on-rest';

import AddressField from '../util/components/AddressField';
import ContactField from '../util/components/ContactField';

const OrganizationFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Name" source="name" alwaysOn />
  </Filter>
)

class OrganizationList extends Component {

  render() {
    console.log('list props: ', this.props);

    return (
      <List
        {...this.props}
        title='Organizations'
        filters={<OrganizationFilter />}>
        <Datagrid>
          <TextField source="name" />
          <AddressField label="Shipping Address" source="shippingAddress" />
          <BooleanField source="active" />
          <ContactField label="Contact" source="POC" />
          <UrlField label="Admin Login" source="http://www.google.com" />
        </Datagrid>
      </List>
    )
  }
}

export default OrganizationList;
