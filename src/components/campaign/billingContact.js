import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { TextField, Checkbox } from 'redux-form-material-ui';

const validate = values => {
  const errors = {}

  return errors
}

class BillingContact extends Component {

  nextSection = (values) => {
    console.log('Billing Contact values: ', values);
    // this.props.history.push(`/chair/${this.props.organization.data._id}/campaigns/new/billingcontact`)
  }


  render() {
    const { handleSubmit, pristine, reset, submitting, selectedOrgAddress  } = this.props;

    return (
      <form onSubmit={handleSubmit(this.nextSection)}>

        <div>
          <Field name="useOrganizationAddress" component={Checkbox} label="Use Organization Address" />
        </div>
        {!selectedOrgAddress && (
          <div>
            <Field
              name="Address"
              component={TextField}
              hintText="Address"
            />
          </div>
        )}

        <div>
          <FlatButton type="submit" disabled={pristine || submitting}>
            Next
          </FlatButton>
          <FlatButton type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </FlatButton>
        </div>

      </form>
    );
  }
}

BillingContact = reduxForm({
  form: 'billingContact',
  validate,
  warn: () => {}
})(BillingContact);

const selector = formValueSelector('billingContact')

BillingContact = connect(state => {
  const selectedOrgAddress = selector(state, 'useOrganizationAddress')

  return {
    selectedOrgAddress
  }
})(BillingContact)

export default BillingContact
