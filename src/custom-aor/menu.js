import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuItemLink, WithPermission } from 'admin-on-rest';
import { SwitchPermissions, Permission } from 'aor-permissions';
import Divider from 'material-ui/Divider';
import { push as pushAction } from 'react-router-redux';

import LoginMenuItem from './loginMenuItem';
import authClient from './authClient';

const userNotFound = () => (<LoginMenuItem />)

const Menu = ({ onMenuTap, logout, push, userLogout }) => (
  <div>
    <WithPermission value='Admin'>
      <MenuItemLink to="/organizations" primaryText="Organizations" onClick={onMenuTap} />
    </WithPermission>
    <MenuItemLink to="/orders" primaryText="Orders" onClick={onMenuTap} />
    <Divider />
    <MenuItemLink to="/locations" primaryText="Locations" onClick={onMenuTap} />
    <MenuItemLink to="/products" primaryText="Products" onClick={onMenuTap} />
    <MenuItemLink to="/salesforce" primaryText="Salesforce" onClick={onMenuTap} />
    <Divider />
    <MenuItemLink to="/reports" primaryText="Reports" onClick={onMenuTap} />

    <SwitchPermissions authClient={authClient} notFound={userNotFound}>
      <Permission value={['Admin', 'Chair']}>
        {logout}
      </Permission>
    </SwitchPermissions>

  </div>
)

Menu.propTypes = {
  push: PropTypes.func
}

export default connect(null, {
  push: pushAction,
})(Menu);
