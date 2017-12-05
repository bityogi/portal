import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import Paper from 'material-ui/Paper';

import { FormattedDate } from 'react-intl'

import { getOrganization, getCampaigns, getRegisteredSellers } from '../../actions';


class DefaultCampaign extends Component {

  render() {
    const { campaign, organization: org } = this.props

    if (campaign.loading === true) {
      return (<h4>Loading ...</h4>)
    } else {
      return (
          <div>
            <Paper style={styles.paper} zDepth={2}>
              <div>
                Welcome to the Chairperson Dashboard for {org.name}

                <br />
                Currently Managing :
                <br />

                {campaign.data.name}
                <br />
                Fundraiser runs from:
                <FormattedDate value={campaign.data.startDate} year='numeric' month='long' day='2-digit' /> to <FormattedDate value={campaign.data.endDate} year='numeric' month='long' day='2-digit' />
              </div>

            </Paper>

          </div>
      )
    }
  }
}

const styles = {
  paper: {
    textAlign: 'center',
  }
}

const mapStateToProps = (state) => ({
  organization: state.organization,
  campaign: state.campaign
})


const enhance = compose(
    connect(mapStateToProps, null)
);

export default enhance(DefaultCampaign);
