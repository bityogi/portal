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
import _ from 'lodash';

import authClient from '../../custom-aor/authClient';

import GuestDashboard from './dashboard';
import ChairDashboard from './chairDashboard';
import AdminDashboard from './adminDashboard';

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      roles: []
    }
  }

  componentWillMount() {
    // this.props.authClient(AUTH_GET_PERMISSIONS)
    //   .then(permissions => {
    //     this.setState({ roles: permissions });
    //   });
  }

  componentWillReceiveProps(nextProps, nextState) {
    const roles = (nextProps.user.roles) || [];
    if (roles !== this.state.roles) {
      this.setState({ roles });
    }
  }

  getDashboard() {
    const { roles } = this.state;

    if (roles.includes('Admin')) {
      return ( <AdminDashboard /> );
    } else if (roles.includes('Chair')) {
      return ( <ChairDashboard /> );
    } else {
      return ( <ChairDashboard /> );
    }
  }


  render() {
    const { user } = this.props;
    return (
      <div>
        {this.getDashboard()}
      </div>
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
