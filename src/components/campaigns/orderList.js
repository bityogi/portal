import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Divider from 'material-ui/Divider';
import {Card, CardHeader, CardText} from 'material-ui/Card';


import { getOrder } from '../../../reducers/order'

class OrderList extends Component {

  renderOrderRows() {
    return _.map(this.props.campaign.data.orders, (order) => {
      const { number, updatedAt, type, status, salesTax, subtotal } = order

      return (
        <TableRow selectable={true} key={order._id} selected={this.props.order.data._id === order._id}>
          <TableRowColumn>{number}</TableRowColumn>
          <TableRowColumn>{updatedAt}</TableRowColumn>
          <TableRowColumn>{type}</TableRowColumn>
          <TableRowColumn>{status}</TableRowColumn>
          <TableRowColumn>{salesTax}</TableRowColumn>
          <TableRowColumn>{subtotal}</TableRowColumn>
        </TableRow>
      )
    })
  }

  orderSelected = (selectedRow) => {
    if (_.isEmpty(selectedRow)) {
      return
    }
    const selectedOrder = this.props.campaign.data.orders[selectedRow]
    this.props.getOrder(selectedOrder._id, false)
  }

  render() {
    const { campaign } = this.props

    if (campaign.loading === true) {
      return (<h4>Loading ...</h4>)
    } else {

      return (
        <div>
          <Card style={styles.campaignInfoCard} zDepth={2}>
            <CardHeader title="Orders" />
            <CardText>
              <Table allRowsSelected={false} onRowSelection={this.orderSelected}>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Order</TableHeaderColumn>
                    <TableHeaderColumn>Last Modified</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Tax Rate</TableHeaderColumn>
                    <TableHeaderColumn>Product Total</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={true}>
                  {this.renderOrderRows()}
                </TableBody>
              </Table>
              <Divider />

            </CardText>
          </Card>

        </div>
      )
    }

  }
}

const styles = {

};

const mapDispatchToProps = dispatch => bindActionCreators({
  getOrder
}, dispatch)


const mapStateToProps = (state) => ({
  campaign: state.campaign,
  order: state.order
})


export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
