import React, { Component } from 'react';
import { MenuItemLink } from 'admin-on-rest';
import LoginIcon from 'material-ui/svg-icons/action/account-box';

class LoginMenuItem extends Component {

  toLogin() {
    console.log('Navigating to login');
  }

  render() {
    return (
      <MenuItemLink
          className="login"
          leftIcon={<LoginIcon />}
          primaryText="Login"
          onClick={this.toLogin.bind(this)}
          to="/login"
      />
    )
  }
}

export default LoginMenuItem;
