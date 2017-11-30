import React, { Component } from 'react';
import {
  Create,
  SimpleForm,
  SelectInput,
  TextInput,
  DateInput
} from 'admin-on-rest';
import { DependentInput } from 'aor-dependent-input';

import { typeChoices } from './util';
import { periodChoices } from './util';

const checkForNumberSelection = (record) => {
  return (record.type === 'Orders') && (record.period === 'NumberRange')
}

const ReportCreate = (props) => {
  console.log('report create props: ', props);
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput source="type" choices={typeChoices} />
        <SelectInput source="period" choices={periodChoices} />
        <DependentInput dependsOn="period"value="Custom">
          <DateInput source="startDate" />
          <DateInput source="endDate" />
        </DependentInput>
        <DependentInput resolve={checkForNumberSelection}>
          <TextInput source="startNumber" />
          <TextInput source="endNumber" />
        </DependentInput>
      </SimpleForm>
    </Create>
  )
}

export default ReportCreate;
