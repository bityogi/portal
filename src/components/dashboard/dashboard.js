import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const login_button_styles = {
  margin: 12,
};

export default () => (
    <Card style={{ margin: '-2em' }}>
      <CardHeader
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardTitle
        title='Welcome to Simply Sheets Fundraising!'
      />
      <CardMedia>
        <img src='./index_header.jpg' alt='SSF Logo' />
      </CardMedia>
      <CardText>
        We offer our customers a unique experience in fundraising
        with the ability to control their profit margins for their
        locally distributed, community fundraiser and the ability
        to earn 40% profit through our online shopping fundraiser.
        Your organization is able to reach friends & family, far & wide
        to gain additional support!
      </CardText>
      <CardActions>
        <RaisedButton label='Create a new account' style={login_button_styles} />
        <RaisedButton label='Chairperson Login' primary={true} style={login_button_styles} />
        <RaisedButton label='Seller/Sharer Login' secondary={true} style={login_button_styles} />
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
      <CardText>
        <section id='manual_order'>
          Manual Orders can and will be accepted.  If you do not have access to a computer
          or if our Chairperson Portal is unavailable, please contact us <a href='mailto:info@simplysheetsfundraising.com'>via email</a> for
          instructions to manually place your order.
          <h4 className='lead'>Manual Orders</h4>
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
);
