import React, { Component } from 'react';
import { List, Datagrid, TextField, BooleanField, DateField, UrlField } from 'admin-on-rest';

class ProductList extends Component {

  render() {
    console.log('list props: ', this.props);

    return (
      <List {...this.props} title={'Orders'}>
        <Datagrid>
          <TextField source="shortItem" />
        </Datagrid>
      </List>
    )
  }
}

export default ProductList;
