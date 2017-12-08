import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { Link } from 'react-router-dom'
import _ from 'lodash'

import { getOrganization } from '../../../reducers/organization'
import { getCampaign } from '../../../reducers/campaign'

import CampaignInfo from './campaignInfo'
import OrderInfo from './orderInfo'
import OrderList from './orderList'
import RegisteredSellers from './sellers'
import SellerStandings from './sellerStandings'
import NewOrder from './newOrder'

class Campaigns extends Component {



  renderCampaigns = () => {
    return _.map(this.props.campaigns.data, (campaign) => {
      return (<MenuItem key={campaign._id} value={campaign._id} primaryText={campaign.name} />)
    })
  }

  handleCampaignChange = (value) => {
    this.props.getCampaign(this.props.organization.data._id, value)
  }

  render() {
    const { campaign, organization } = this.props

    const newCampaignLink = `/chair/${organization.data._id}/campaigns/new`
    const dashboardLink = `/chair/${organization.data._id}`



    return (
      <div>
        <h1>Campaign Dashboard for {campaign.data.name} </h1>

          <div>
           <SelectField
             value={campaign.data._id}
             onChange={(event, index, value) => this.handleCampaignChange(value)}
             floatingLabelText="Change Campaigns"
             floatingLabelStyle={{color: 'red'}}
           >
           {this.renderCampaigns()}
         </SelectField>
       </div>
        <Link to={dashboardLink}><RaisedButton label="Chairperson Dashboard" primary={true} style={styles.button} /></Link>
        <Link to={newCampaignLink}><RaisedButton label="New Campaign" primary={true} style={styles.button} /></Link>

        <CampaignInfo />

        <NewOrder orgId={organization.data._id} />

        <OrderInfo />

        <OrderList />

        <RegisteredSellers />

        <SellerStandings />
      </div>
    )
  }
}


const styles = {
  button: {
    margin: 12,
  },
  campaignInfoCard: {
    width: '100%',
    margin: 20,
    textAlign: 'center',
  }
}

const mapStateToProps = (state) => ({
  chair : state.chair,
  organization: state.organization,
  campaigns: state.campaigns,
  campaign: state.campaign
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getOrganization,
  getCampaign
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns)
