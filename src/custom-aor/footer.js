import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getContext from 'recompose/getContext';
import muiThemeable from 'material-ui/styles/muiThemeable';
import compose from 'recompose/compose';
import {
  toggleSidebar as toggleSidebarAction
 } from 'admin-on-rest';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import { push as pushAction } from 'react-router-redux';
import defaultTheme from './defaultTheme';

const sellersIcon = <FontIcon className='material-icons'>accessibility</FontIcon>;
const tutorialsIcon = <FontIcon className='material-icons'>flight_land</FontIcon>;
const faqIcon = <FontIcon className='material-icons'>restore</FontIcon>;
const correctionsIcon = <FontIcon className='material-icons'>autorenew</FontIcon>;
const onlineIcon = <FontIcon className='material-icons'>important_devices</FontIcon>;

const styles = {
  toolbar: {
    backgroundColor: 'white'
  },

  iconStyles : {
    marginTop: 0,
    marginRight: 0,
    marginLeft: '-24px',
  },
  title : {
    color: '#26A69A',
    marginLeft: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  toolBarSeparator : {
    marginRight: '15px',
  },
  loginContainer : {
    display: 'inline-block',
  },
  loginButtons: {
    margin: '10px 10px',
  }
}



// const Logout = () => (
//   <FontIcon className='material-icons' styles={styles.iconStyles}>power_settings_new</FontIcon>
// )

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn : false,
      selectedIndex: 0,
    }
  }

  select = (index) => this.setState({selectedIndex: index});

  componentWillMount() {
  }

  render() {
    const { toggleSidebar } = this.props;

    return (
      <Paper
        style={{ padding:'10px' }}
        zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label='Sellers'
            icon={sellersIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label='Tutorials'
            icon={tutorialsIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label='FAQ'
            icon={faqIcon}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label='Order Corrections'
            icon={correctionsIcon}
            onClick={() => this.select(3)}
          />
          <BottomNavigationItem
            label='Online Orders'
            icon={onlineIcon}
            onClick={() => this.select(4)}
          />
        </BottomNavigation>
      </Paper>
    )
  }
}

Footer.propTypes = {
    toggleSidebar: PropTypes.func.isRequired
  };

const enhance = compose(
    muiThemeable(), // force redraw on theme change
    connect(null, {
      push: pushAction,
      toggleSidebar: toggleSidebarAction
    })
);

export default enhance(Footer);
