import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';



class RegisteredSellers extends Component {

  renderSellerStandings() {
    const { sellerStandings } = this.props
    return _.map(sellerStandings.data, (s) => {
      return (<ListItem primaryText={`${s.displayName.first} ${s.displayName.last}`} key={s._id}/>)
    })
  }
  render() {
    const { sellerStandings } = this.props

    if (sellerStandings.loading === true) {
      return (<h4>Loading ...</h4>)
    } else {
      return (
        <div>
          <Subheader>Seller Standings</Subheader>
          <List>
            {this.renderSellerStandings()}
          </List>

        </div>
      )
    }

  }
}


const mapStateToProps = (state) => ({
  sellerStandings: state.sellerStandings
})


export default connect(mapStateToProps, null)(RegisteredSellers)
