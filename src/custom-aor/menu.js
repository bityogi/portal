import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, WithPermission } from 'admin-on-rest';
import Divider from 'material-ui/Divider';


const Menu = ({ onMenuTap, logout }) => (
  <div>
    <WithPermission value='Admin'>
      <MenuItemLink to="/organizations" primaryText="Organizations" onClick={onMenuTap} />
    </WithPermission>
    <MenuItemLink to="/orders" primaryText="Orders" onClick={onMenuTap} />
    <Divider />
    <MenuItemLink to="/products" primaryText="Products" onClick={onMenuTap} />
    <MenuItemLink to="/salesforce" primaryText="Salesforce" onClick={onMenuTap} />
    <Divider />
    <MenuItemLink to="/reports" primaryText="Reports" onClick={onMenuTap} />
    {logout}
  </div>
)

export default Menu;
