import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuItemLink, WithPermission } from 'admin-on-rest';
import { SwitchPermissions, Permission } from 'aor-permissions';
import Divider from 'material-ui/Divider';
import { push as pushAction } from 'react-router-redux';
import compose from 'recompose/compose';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';

import defaultTheme from './defaultTheme';

import LoginMenuItem from './loginMenuItem';
import authClient from './authClient';

import FontIcon from 'material-ui/FontIcon';

const userNotFound = () => (<LoginMenuItem />)

const muiTheme = getMuiTheme(defaultTheme);
console.log('muiTheme: ', muiTheme);

const menuStyles = {
  fontSize:'1.2em', color: muiTheme.palette.primary1Color
}

const Menu = ({ onMenuTap, logout, push, userLogout }) => (
  <div>
    <WithPermission value='Admin'>
      <MenuItemLink to='/organizations'
        style={menuStyles}
        leftIcon={
          <FontIcon
            style={menuStyles}
            className='material-icons'>group_work</FontIcon>
        }
        primaryText='Organizations' onClick={onMenuTap} />
    </WithPermission>
    <MenuItemLink
      leftIcon={<FontIcon
          style={menuStyles}
          className='material-icons'>attach_money</FontIcon>
        }
      style={menuStyles}
      to='/orders' primaryText='Orders' onClick={onMenuTap} />
    <Divider />
    <MenuItemLink to='/locations'
      leftIcon={<FontIcon
        style={menuStyles}
        className='material-icons'>room</FontIcon>}
      style={menuStyles}
      primaryText='Locations' onClick={onMenuTap} />
    <MenuItemLink to='/products'
      style={menuStyles}
      leftIcon={<FontIcon
        style={menuStyles}
        className='material-icons'>widgets</FontIcon>}
      primaryText='Products' onClick={onMenuTap} />
    <MenuItemLink
      style={menuStyles}
      leftIcon={<FontIcon
        style={menuStyles}
        className='material-icons'>cloud</FontIcon>}
      to='/salesforce' primaryText='Salesforce' onClick={onMenuTap} />
    <Divider />
    <MenuItemLink
      style={menuStyles}
      leftIcon={<FontIcon
        style={menuStyles}
        className='material-icons'>room</FontIcon>}
      to='/reports' primaryText='Reports' onClick={onMenuTap} />

    <SwitchPermissions authClient={authClient} notFound={userNotFound}>
      <Permission value={['Admin', 'Chair']}>
        {logout}
      </Permission>
    </SwitchPermissions>

  </div>
)

Menu.propTypes = {
  push: PropTypes.func,
  theme: PropTypes.object.isRequired
}

Menu.defaultProps = {
    theme: defaultTheme,
};

const enhance = compose(
    muiThemeable(), // force redraw on theme change
    connect(null, {
        push: pushAction,
    })
);

export default enhance(Menu);
