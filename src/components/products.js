import React, { Component } from 'react';
// import { List, Datagrid, TextField, BooleanField, DateField, UrlField } from 'admin-on-rest';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

export const ProductList = (props) => (
      <List {...props}>
        <Datagrid>
          <TextField source='shortItem' />
          <TextField source='longItem' />
          <TextField source='type' />
          <TextField source='description' />
          <TextField source='price' />
          <TextField source='color' />
          <TextField source='size' />
          <TextField source='eCommercePrice' />
          <EditButton />
        </Datagrid>
      </List>
);

const ProductTitle = ({ record }) => {
  return <span>Product {record ? `'${record.longItem}'` : ''}</span>;
};

export const ProductEdit = (props) => (
  <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source='id' />
            <TextInput source='shortItem' />
            <TextInput source='longItem' />
            <TextInput source='type' />
            <TextInput source='description' />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='shortItem' />
            <LongTextInput source='description' />
        </SimpleForm>
    </Create>
);
