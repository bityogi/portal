import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import thunk from 'redux-thunk';
import { push as pushAction } from 'react-router-redux';

import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'

import { getOrganization, getCampaigns, getRegisteredSellers } from '../../actions';

import DefaultCampaign from '../campaign/defaultCampaign';
import FundrasingMethods from '../campaign/fundraisingMethods'

class ChairDashboard extends Component {
  componentDidMount() {
    const { orgId } = this.props.user;
    this.props.getOrganization(orgId)
    this.props.getCampaigns(orgId)
    this.props.getRegisteredSellers(orgId)
  }

  render() {
    const {organization : org, campaigns } = this.props

    if ((org.loading === true) || (campaigns.loading === true)) {
      return (<h4>Loading ...</h4>)
    } if ((org.error) || (campaigns.error)) {
      return (<h3>Error Occured ... </h3>)
    } else {
      const campaignsLink = `/chair/${org.data._id}/campaigns`
      const newCampaignLink = `/chair/${org.data._id}/campaigns/new`
      return (
        <div>
          <h3>Chair Home (New One)</h3>

          <DefaultCampaign />

          <Link to={campaignsLink}>
            <RaisedButton label="Manage All Campaigns/Orders" primary={true} style={styles.button} />
          </Link>
          <Link to={newCampaignLink}>
            <RaisedButton label="Create New Campaign" primary={true} style={styles.button} />
          </Link>
          <Divider />

          <h4>Start reaching your goals!</h4>
          <h2>You have 2 methods for fundraising.</h2>
          <Divider />
          <FundrasingMethods />
        </div>
        )
    }
  }
}

const styles = {
  button: {
    margin: 12,
  },
  paper: {
    textAlign: 'center',
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  chair : state.chair,
  organization: state.organization,
  campaigns: state.campaigns
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getOrganization,
  getCampaigns,
  getRegisteredSellers
}, dispatch)

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(ChairDashboard);
