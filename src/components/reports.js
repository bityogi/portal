import React, { Component} from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  UrlField,
  DateField,
  Filter,
  SelectInput,

 } from 'admin-on-rest';

import AddressField from '../util/components/AddressField';
import ContactField from '../util/components/ContactField';

const typeChoices = [
  { id: 'Orders', name: 'Orders' },
  { id: 'OrderDetails', name: 'Order Details' },
  { id: 'OrderContents', name: 'Order Contents' },
  { id: 'Campaigns', name: 'Campaigns' }
]

const ReportFilter = (props) => (
  <Filter {...props}>
    <SelectInput label="Type" source="type" choices={typeChoices} />
  </Filter>
)

class ReportList extends Component {

  render() {
    console.log('list props: ', this.props);

    return (
      <List
        {...this.props}
        title='Report History'
        filters={<ReportFilter />}>
        <Datagrid>
          <TextField label="Report Type" source="type" />
          <TextField source="range" />
          <TextField label="Admin" source="createdBy.username" />
          <DateField label="Created On" source="createdAt" />
          <TextField source="fileName" />
          <TextField source="status" />
          <UrlField label="Download" source="http://www.google.com" />
        </Datagrid>
      </List>
    )
  }
}

export default ReportList;
