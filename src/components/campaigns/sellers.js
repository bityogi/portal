import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';



class RegisteredSellers extends Component {

  renderSellers() {
    const { sellers } = this.props
    return _.map(sellers.data, (s) => {
      return (<ListItem primaryText={`${s.displayName.first} ${s.displayName.last}`} key={s._id}/>)
    })
  }
  render() {
    const { sellers } = this.props

    if (sellers.loading === true) {
      return (<h4>Loading ...</h4>)
    } else {
      return (
        <div>
          <Subheader>Sellers</Subheader>
          <List>
            {this.renderSellers()}
          </List>

        </div>
      )
    }

  }
}


const mapStateToProps = (state) => ({
  sellers: state.sellers
})


export default connect(mapStateToProps, null)(RegisteredSellers)
