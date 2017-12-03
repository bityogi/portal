import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getContext from 'recompose/getContext';
import RaisedButton from 'material-ui/RaisedButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import compose from 'recompose/compose';
import {
  toggleSidebar as toggleSidebarAction,
  userLogout,
  AUTH_LOGOUT,
  AUTH_GET_PERMISSIONS
 } from 'admin-on-rest';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import {indigo500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { push as pushAction } from 'react-router-redux';
import { SwitchPermissions, Permission } from 'aor-permissions';

import defaultTheme from './defaultTheme';
import authClient from './authClient';

const styles = {
  toolbar: {
    backgroundColor: '#00bcd4',
  },

  iconStyles : {
    marginTop: 0,
    marginRight: 0,
    marginLeft: '-24px',
  },
  title : {
    marginLeft: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  toolBarSeparator : {
    marginRight: '15px',
  },
  loginContainer : {
    display: 'inline-block',
  },
  loginButtons: {
    margin: '10px 10px',
  }
}



// const Logout = () => (
//   <FontIcon className="material-icons" styles={styles.iconStyles}>power_settings_new</FontIcon>
// )

class CustomAppBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn : false
    }
  }

  componentWillMount() {
    this.props.authClient(AUTH_GET_PERMISSIONS)
      .then(permissions => {
        if (permissions.includes('Admin') || permissions.includes('Chair')) {
          this.setState({
            loggedIn: true
          })
        } else {
          this.setState({
            loggedIn: false
          })
        }
      })
  }

  logout() {
    console.log('logging out through custom appbar');
    this.setState({
      loggedIn: false
    });

    this.props.authClient(AUTH_LOGOUT)
      .then(() => {
        this.props.push('/');
      })
  }

  renderLoginItems() {
    return (
      <span style={styles.loginContainer}>
        <RaisedButton
          label="Sign up"
          primary={true}
          style={styles.loginButtons} onClick={() => console.log('Signing up!')}
          icon={<FontIcon className="material-icons">person_add</FontIcon>}
        />
        <RaisedButton
          label="Login"
          style={styles.loginButtons}
          onClick={() => this.props.push('/login')}
          icon={<FontIcon className="material-icons">person_pin</FontIcon>}
        />
      </span>
    )
  }

  renderLogoutItems() {
    return (
      <RaisedButton
        label="Log out"
        style={styles.loginButtons}
        onClick={this.logout.bind(this)}
        icon={<FontIcon className="material-icons">power_settings_new</FontIcon>}
      />
    )
  }

  renderAuth() {
    if (this.state.loggedIn) {
      return this.renderLogoutItems()
    } else {
      return this.renderLoginItems()
    }
  }

  render() {
    const { title, toggleSidebar, push, userLogout } = this.props;

    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup>
          <FontIcon className="material-icons" style={styles.iconSytles} onClick={toggleSidebar}>menu</FontIcon>
          <ToolbarTitle text={title} style={styles.title} onClick={() => push('/')} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator style={styles.toolBarSeparator} />
          {this.renderAuth()}
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

CustomAppBar.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    authClient: PropTypes.func,
};

const enhance = compose(
    muiThemeable(), // force redraw on theme change
    getContext({
        authClient: PropTypes.func,
    }),
    connect(null, {
        toggleSidebar: toggleSidebarAction,
        push: pushAction,
        userLogout: userLogout
    })
);

export default enhance(CustomAppBar);
