import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'
import PropsRoute from '../../../util/PropsRoute'

import Info from './info'
import PriceGuideline from './priceGuidelines'
import SalesPacketRequest from './salesPackets'
import BillingAddress from './billingAddress'
import BillingContact from './billingContact'

class NewCampaign extends Component {

  render() {
    const { organization } = this.props


    return (
      <div>
        <h1>New Campaign</h1>
        <Switch>
          <PropsRoute exact path="/chair/:orgId/campaigns/new" component={Info} organization={organization} />
          <PropsRoute exact path="/chair/:orgId/campaigns/new/price" component={PriceGuideline} organization={organization} />
          <PropsRoute exact path="/chair/:orgId/campaigns/new/salespacket" component={SalesPacketRequest} organization={organization} />
          <PropsRoute exact path="/chair/:orgId/campaigns/new/address" component={BillingAddress} organization={organization} />
          <PropsRoute exact path="/chair/:orgId/campaigns/new/contact" component={BillingContact} organization={organization} />
        </Switch>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  organization: state.organization
})



export default connect(mapStateToProps )(NewCampaign)
