import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiAppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import compose from 'recompose/compose';
import { toggleSidebar as toggleSidebarAction } from 'admin-on-rest';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import {indigo500} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import { push as pushAction } from 'react-router-redux';

import defaultTheme from './defaultTheme';

const styles = {
  toolbar: {
    backgroundColor: '#00bcd4',
  },

  iconStyles : {
    marginTop: 0,
    marginRight: 0,
    marginLeft: '-24px',
  },
  title : {
    marginLeft: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.5em',

  }
}

const CustomAppBar = ({ title, toggleSidebar, push }) => (
    <Toolbar style={styles.toolbar}>
      <ToolbarGroup>
        <FontIcon className="material-icons" style={styles.iconSytles} onClick={toggleSidebar}>menu</FontIcon>
        <ToolbarTitle text={title} style={styles.title} onClick={() => push('/')} />
      </ToolbarGroup>
    </Toolbar>
);

CustomAppBar.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

const enhance = compose(
    muiThemeable(), // force redraw on theme change
    connect(null, {
        toggleSidebar: toggleSidebarAction,
        push: pushAction
    })
);

export default enhance(CustomAppBar);
