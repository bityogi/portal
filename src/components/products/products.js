import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, LongTextInput, SimpleForm, TextInput } from 'admin-on-rest';

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
