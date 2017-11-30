import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { showNotification } from 'admin-on-rest';

import { restClient } from '../../util';

const cardActionStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
}


class SalesforceActions extends Component {

  initiateSync = () => {
    console.log('Salesforce Sync initiated. Props: ', this.props);
    const { showNotification } = this.props;
    fetch(`${process.env.REACT_APP_API_URL}/salesforce`, { method: 'POST' })
      .then((response) => {
        showNotification('Sync Initiated');
      })
      .catch((e) => {
        console.error(e);
        showNotification('Error with Sync Initiation', 'warning');
      })
  }

  render() {
    return (
      <CardActions style={cardActionStyle}>
        <FlatButton primary label="Initiate Sync" onClick={this.initiateSync.bind(this)} />
      </CardActions>
    )
  }
}



export default connect(null, {
  showNotification
})(SalesforceActions)
