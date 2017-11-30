import React, { Component } from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField
 } from 'admin-on-rest';

import SalesforceActions from './syncAction';

class Salesforce extends Component {
  render() {
    return (
      <List
        {...this.props}
        title='Salesforce Syncs'
        actions={<SalesforceActions />}>
        <Datagrid>
          <DateField label="Sync Date" source="lastSync" />
          <TextField source="client" />
          <TextField source="status" />
        </Datagrid>
      </List>
    )
  }
}

export default Salesforce
