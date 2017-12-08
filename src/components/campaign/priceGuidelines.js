import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton';

class PriceGuideline extends Component {

  nextSection = () => {
    this.props.history.push(`/chair/${this.props.match.params.orgId}/campaigns/new/salespacket`)
  }

  render() {
    return (
      <div>
        <h2> Price Guidelines </h2>
        <FlatButton onClick={this.nextSection}>Skip</FlatButton>
        <FlatButton onClick={this.nextSection}>Customize</FlatButton>
      </div>
    )
  }
}

export default PriceGuideline
