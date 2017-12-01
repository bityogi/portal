import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink } from 'admin-on-rest';
import Divider from 'material-ui/Divider';

const Menu = ({ onMenuTap, logout }) => (
  <div>
    <MenuItemLink to="/organizations" primaryText="Organizations" onClick={onMenuTap} />
    <MenuItemLink to="/orders" primaryText="Orders" onClick={onMenuTap} />
    <Divider />
    <MenuItemLink to="/salesforce" primaryText="Salesforce" onClick={onMenuTap} />
    <Divider />
    <MenuItemLink to="/reports" primaryText="Reports" onClick={onMenuTap} />
  </div>
)

export default Menu;
