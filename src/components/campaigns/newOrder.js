import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'


class NewOrderButton extends Component {

  constructor(props) {
    super(props)

    this.renderButton = this.renderButton.bind(this)
  }

  renderButton() {
    const activeOrderStatus = ['New', 'Saved']
    let activeOrder = _.find(this.props.campaign.data.orders, (o) => {
      return activeOrderStatus.includes(o.status)
    })

    if (_.isEmpty(activeOrder)) {
      const { orgId } = this.props
      const newOrderLink = `/chair/${orgId}/orders/new`

      return (
        <Link to={newOrderLink}>
          <RaisedButton label="New Catalog Order" primary={true} style={styles.button} />
        </Link>
      )
    } else {
      return
    }
  }

  render() {
    const { campaign } = this.props

    if (campaign.loading === true) {
      return (<h4>Loading ...</h4>)
    } else {

      return (
        <div>
          {this.renderButton()}
        </div>
      )
    }

  }
}

const styles = {
  button: {
    margin: 12,
  }
};


const mapStateToProps = (state) => ({
  campaign: state.campaign
})


export default connect(mapStateToProps, null)(NewOrderButton)
