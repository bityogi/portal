import React, { Component} from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  UrlField,
  DateField,
  SelectField,
  Filter,
  SelectInput
 } from 'admin-on-rest';


import AddressField from '../../util/components/AddressField';
import ContactField from '../../util/components/ContactField';

import { typeChoices } from './util';

const ReportFilter = (props) => (
  <Filter {...props}>
    <SelectInput label="Type" source="type" choices={typeChoices} />
  </Filter>
)

class ReportList extends Component {

  render() {
    return (
      <List
        {...this.props}
        title='Report History'
        filters={<ReportFilter />}>
        <Datagrid>
          <SelectField label="Report Type" source="type" choices={typeChoices} />
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
