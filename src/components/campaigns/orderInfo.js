import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import { computeSheetTotals, computePillowCaseTotals } from '../../util/orderTotals'
import Currency from '../../util/components/Currency'
import Percent from '../../util/components/Percent'

class SelectedOrder extends Component {

  render() {
    const { order } = this.props

    if (order.loading === true) {
      return (<h4>Loading ...</h4>)
    } else {
      const {
        number,
        billingInfo,
        shippingInfo,
        type,
        status,
        paymentStatus,
        subtotal,
        salesTax,
        taxAmount,
        shipAmount,
        total
       } = order.data

      return (
        <div>
          <Card style={styles.campaignInfoCard} zDepth={2}>
            <CardHeader title="OrderInfo" subtitle={order.data.number} />
            <CardText>
              <Table allRowsSelected={false}>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Number</TableHeaderColumn>
                    <TableHeaderColumn>Billing Address</TableHeaderColumn>
                    <TableHeaderColumn>Shipping Address</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                    <TableHeaderColumn>Payment Status</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow selectable={false}>
                    <TableRowColumn>{number}</TableRowColumn>
                    <TableRowColumn>{`${billingInfo.address1} ${billingInfo.city}, ${billingInfo.state}`}</TableRowColumn>
                    <TableRowColumn>{`${shippingInfo.address1} ${shippingInfo.city}, ${shippingInfo.state}`}</TableRowColumn>
                    <TableRowColumn>{type}</TableRowColumn>
                    <TableRowColumn>{status}</TableRowColumn>
                    <TableRowColumn>{paymentStatus}</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
              <Divider />
              <Subheader>Order Details</Subheader>
                <Table allRowsSelected={false}>
                  <TableHeader displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>Sheets</TableHeaderColumn>
                      <TableHeaderColumn>Pillowcases</TableHeaderColumn>
                      <TableHeaderColumn>Product Total</TableHeaderColumn>
                      <TableHeaderColumn>Tax Rate</TableHeaderColumn>
                      <TableHeaderColumn>Tax Amount</TableHeaderColumn>
                      <TableHeaderColumn>Shipping</TableHeaderColumn>
                      <TableHeaderColumn>Total</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow selectable={false}>
                      <TableRowColumn>{computeSheetTotals(order.data)}</TableRowColumn>
                      <TableRowColumn>{computePillowCaseTotals(order.data)}</TableRowColumn>
                      <TableRowColumn><Currency value={subtotal} /></TableRowColumn>
                      <TableRowColumn><Percent value={salesTax} /></TableRowColumn>
                      <TableRowColumn><Currency value={taxAmount} /></TableRowColumn>
                      <TableRowColumn><Currency value={shipAmount} /></TableRowColumn>
                      <TableRowColumn><Currency value={total} /></TableRowColumn>
                    </TableRow>

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

const mapStateToProps = (state) => ({
  order: state.order
})


export default connect(mapStateToProps, null)(SelectedOrder)
