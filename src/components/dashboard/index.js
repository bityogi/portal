import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  AUTH_GET_PERMISSIONS
 } from 'admin-on-rest';
 import getContext from 'recompose/getContext';
 import compose from 'recompose/compose';
 import { push as pushAction } from 'react-router-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import authClient from '../../custom-aor/authClient';

import GuestDashboard from './dashboard';
import ChairDashboard from './chairDashboard';
import AdminDashboard from './adminDashboard';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      role: ''
    }
  }

  componentWillMount() {
    this.props.authClient(AUTH_GET_PERMISSIONS)
      .then(permissions => {
        if (permissions.includes('Admin')) {
          console.log('Applying Admin Dashboard');
          // return <AdminDashboard />
          this.setState({ role: 'Admin' })
        } else if (permissions.includes('Chair')) {
          console.log('Applying Chair Dashboard');
          this.setState({ role: 'Chair' })
          // return <ChairDashboard />
        } else {
          console.log('Applying Guest Dashboard');
          this.setState({ role: 'Guest' })
          // return <GuestDashboard />
        }
      })
  }

  getDashboard() {
    const { role } = this.state;

    if (role === 'Admin') {
      return 'Admin'
    } else if (role === 'Chair') {
      return 'Chair'
    } else {
      return 'Guest'
    }
  }


  render() {
    const { user } = this.props;
    console.log('user in dashboard: ', user);
    return (

        <h1>Dashboard for {this.getDashboard()}</h1>


    )
  }
}

const mapStateToProps = (state) => ({
  user : state.user
});

const enhance = compose(
    getContext({
        authClient: PropTypes.func,
    }),
    connect(mapStateToProps, {
        push: pushAction
    })
);

export default enhance(Dashboard);
