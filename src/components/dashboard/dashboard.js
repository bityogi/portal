import React from 'react';
import { Responsive, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import Footer from '../../custom-aor/footer';

import indexHeaderImage from '../../assets/images/index_header.jpg';
import styles from './styles.js';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';

import defaultTheme from '../../custom-aor/defaultTheme';

const muiTheme = getMuiTheme(defaultTheme);

const recentsIcon = <FontIcon className='material-icons'>restore</FontIcon>;
const favoritesIcon = <FontIcon className='material-icons'>favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class Dashboard extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        expanded: false,
        MO_expanded: false,
        selectedIndex: 0,
      };
    }

    select = (index) => this.setState({selectedIndex: index});

    handleExpandChange = (expanded) => {
      this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
      this.setState({expanded: !this.state.expanded});
    };


    handle_MO_ExpandChange = (MO_expanded) => {
      this.setState({expanded: MO_expanded});
    };

    handle_MO_Toggle = (event, toggle) => {
      this.setState({MO_expanded: !this.state.MO_expanded});
    };

    render () {
      return (
      <div className='dashboard_wrapper'>
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
          style={styles.card_style}>
          <CardMedia
            overlay={
              <CardTitle
                titleStyle={styles.card_title_style}
                titleColor={muiTheme.palette.primary1Color}
                title='Welcome to Simply Sheets Fundraising!'
              />
            }
          >
            <img src={indexHeaderImage} alt='' />
          </CardMedia>
          <CardText
            style={styles.card_text_style}
          >
            {styles.subtitle}
          </CardText>
          <CardActions
            style={styles.card_action_style}>
            <RaisedButton
              label='Create a new account'
              style={styles.login_button_styles} />
            <RaisedButton
              label='Chairperson Login' primary={true} style={styles.login_button_styles} />
            <RaisedButton
              label='Seller/Sharer Login' primary={true} style={styles.login_button_styles} />
            <RaisedButton label='Not Sure?  Click here!'
              secondary={true}
              onClick={this.handleToggle}
              icon={<FontIcon className='muidocs-icon-custom-github' />}
            />
          </CardActions>
          <CardText expandable={true}>
            <ul className='signup_guidance_wrapper'>
              <li>
                If your organization has worked with us in the past and you have not worked within our online system or do not know your login credentials; please do not click the green sign up button.
                This will create duplicate accounts within our system. Just contact us at <a href='mailto:info@simplysheetsfundraising.com?Subject=Signup/Login%20Qestions' target='_top'>info@simplysheetsfundraising.com</a> or 888-248-0054 to request your credentials.
              </li>
              <li>
                If you need to update the contact information on your account by adding or removing a contact, then please email or phone your request.
              </li>
              <li>
                If you are choosing Simply Sheets Fundraising for the first time,then please 'Sign Up' by selecting the green button and completing the requested information.
              </li>
              <li>
                If you are selling/sharing through an organization please do NOT click sign up as this will create an unnecessary account. Please follow the Seller Login link to seller.simplysheetsfundraising.com.
              </li>
            </ul>
          </CardText>
        </Card>
        <Card
          expanded={this.state.MO_expanded}
          onExpandChange={this.handle_MO_ExpandChange}
          style={{ marginTop: '1em', textAlign: 'justify' }}>
          <CardTitle
            title='Manual Orders'
            titleColor={muiTheme.palette.primary1Color}
            subtitle={styles.MO_subtitle}
          />
          <CardActions>
            <RaisedButton label='Email Us'
              href='mailto:info@simplysheetsfundraising.com'
              secondary={true}
              icon={<FontIcon className='muidocs-icon-custom-github' />}
            />
            <RaisedButton label='Learn More'
              onClick={this.handle_MO_Toggle}
            />
          </CardActions>
          <CardText
            expandable={true}
          >
            <section id='manual_order'>
              <h4>We understand that situations with order placement can vary. Please see our manual order process below if circumstances require another order placement method. We are here to assist.</h4>
              <h5 className='text-justify top-buffer'>Manual Order Process
                <ol>
                  <li>If possible, please submit all orders via email (info@simplysheetsfundraising.com - by scanning and attaching.</li>
                  <li>Mail (see address below).</li>
                </ol>
                Please make sure to do the following before submitting your order:
                <ul>
                  <li>Number all order forms in the top right corner (giving each page its own number).</li>
                  <li>Provide a cover sheet with organization, chairperson name, and total amount of pages.</li>
                </ul>
                If mailing:
                <ul>
                  <li>Make copies of your order forms for your records not allowing ANY of your copies to mix with your originals.</li>
                </ul>
              </h5>
              Please mail orders to:
              <p className='text-left'>Simply Sheets Fundraising, LLC</p>
              <p className='text-left'>3760 Sixes Road Suite 126-325</p>
              <p className='text-left'>Canton, GA 30114</p>
              <p className='text-left bold'>*SSF will notify you upon receipt of a manually submitted order. If you do not receive this notification within a reasonable amount of time upon submission, please notify us via phone or email of your submission.</p>
            </section>
          </CardText>
        </Card>
        <div
          style={{ marginTop:'30px' }}
          className='footer_wrapper'
        >
          <Footer />
        </div>
      </div>
    )
  }
}
