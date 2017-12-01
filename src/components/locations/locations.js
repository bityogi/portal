import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput } from 'admin-on-rest';

export const LocationList = (props) => (
      <List {...props}>
        <Datagrid>
          <TextField source='seq' />
          <TextField source='state' />
          <TextField source='stateCode' />
          <TextField source='type' />
          <TextField source='color' />
          <TextField source='rate' />
          <TextField source='taxRate' />
          <EditButton />
        </Datagrid>
      </List>
);

const LocationTitle = ({ record }) => {
  return <span>{record.state}</span>;
};

export const LocationEdit = (props) => (
  <Edit title={<LocationTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source='id' />
            <TextInput source='seq' />
            <TextInput source='state' />
            <TextInput source='stateCode' />
            <TextInput source='type' />
            <TextInput source='color' />
            <TextInput source='rate' />
            <TextInput source='taxRate' />
        </SimpleForm>
    </Edit>
);

export const LocationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source='seq' />
          <TextInput source='state' />
          <TextInput source='stateCode' />
          <TextInput source='type' />
          <TextInput source='color' />
          <TextInput source='rate' />
          <TextInput source='taxRate' />
        </SimpleForm>
    </Create>
);
