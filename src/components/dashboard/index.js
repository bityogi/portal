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
          // return <GuestDashboard />
        }
      })
  }

  getDashboard() {

  }


  render() {
    return (
      <Card>
        <h1>Dashboard for {this.state.role}</h1>
      </Card>

    )
  }
}

const enhance = compose(
    getContext({
        authClient: PropTypes.func,
    }),
    connect(null, {
        push: pushAction
    })
);

export default enhance(Dashboard);
