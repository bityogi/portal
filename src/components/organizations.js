import React, { Component} from 'react';
import { List, Datagrid, TextField, BooleanField, UrlField } from 'admin-on-rest';
import AddressField from '../util/components/AddressField';
import ContactField from '../util/components/ContactField';

class OrganizationList extends Component {

  render() {
    console.log('list props: ', this.props);

    return (
      <List {...this.props} title='Organizations'>
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
