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
import { FormattedDate } from 'react-intl'
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {Card, CardHeader, CardText} from 'material-ui/Card';


class CampaignInfo extends Component {

  render() {
    const { campaign } = this.props

    if (campaign.loading === true) {
      return (<h4>Loading ...</h4>)
    } else {
      return (
        <div>
          <Card style={styles.campaignInfoCard} zDepth={2}>
            <CardHeader title="My Campaign" subtitle={campaign.data.name} />
            <CardText>
              <Table allRowsSelected={false}>
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    <TableHeaderColumn>Campaign Name</TableHeaderColumn>
                    <TableHeaderColumn>Start</TableHeaderColumn>
                    <TableHeaderColumn>End</TableHeaderColumn>
                    <TableHeaderColumn>Chairperson Name</TableHeaderColumn>
                    <TableHeaderColumn>Seller Instructions</TableHeaderColumn>
                    <TableHeaderColumn>More Packets</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow selectable={false}>
                    <TableRowColumn>{campaign.data.name}</TableRowColumn>
                    <TableRowColumn><FormattedDate value={campaign.data.startDate} year='numeric' month='short' day='2-digit' /></TableRowColumn>
                    <TableRowColumn><FormattedDate value={campaign.data.endDate} year='numeric' month='short' day='2-digit' /></TableRowColumn>
                    <TableRowColumn>{}</TableRowColumn>
                    <TableRowColumn>{}</TableRowColumn>
                    <TableRowColumn>{}</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
              <Divider />
              <Subheader>Fundraising Goals</Subheader>
                <Table allRowsSelected={false}>
                  <TableHeader displaySelectAll={false}>
                    <TableRow>
                      <TableHeaderColumn>Goal</TableHeaderColumn>
                      <TableHeaderColumn># of Sellers</TableHeaderColumn>
                      <TableHeaderColumn>Twin Sheet</TableHeaderColumn>
                      <TableHeaderColumn>Full Sheet</TableHeaderColumn>
                      <TableHeaderColumn>Queen Sheet</TableHeaderColumn>
                      <TableHeaderColumn>King Sheet</TableHeaderColumn>
                      <TableHeaderColumn>Cali Sheet</TableHeaderColumn>
                      <TableHeaderColumn>Pillow Case</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow selectable={false}>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                    </TableRow>
                    <TableRow selectable={false}>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
                      <TableRowColumn>{}</TableRowColumn>
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
  campaign: state.campaign
})


export default connect(mapStateToProps, null)(CampaignInfo)
