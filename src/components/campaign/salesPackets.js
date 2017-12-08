import React, { Component } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { TextField, Checkbox } from 'redux-form-material-ui';

const validate = values => {
  const errors = {}

  return errors
}

class SalesPacketRequest extends Component {

  nextSection = (values) => {
    console.log('Sales Packet Request values: ', values);
    this.props.history.push(`/chair/${this.props.match.params.orgId}/campaigns/new/address`)
  }


  render() {
    const { handleSubmit, pristine, reset, submitting, selectedSalesPacket  } = this.props;

    return (
      <form onSubmit={handleSubmit(this.nextSection)}>
        <div>
          <Field name="salesPacket_no" component={Checkbox} label="No" />
        </div>
        <div>
          <Field name="salesPacket_yes" component={Checkbox} label="Yes" />
        </div>
        {selectedSalesPacket && (
          <div>
            <Field
              name="lastName"
              component={TextField}
              hintText="Please enter the number of packets you would like"
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

SalesPacketRequest = reduxForm({
  form: 'salesPacketRequest',
  validate,
  warn: () => {}
})(SalesPacketRequest);

const selector = formValueSelector('salesPacketRequest')

SalesPacketRequest = connect(state => {
  const selectedSalesPacket = selector(state, 'salesPacket_yes')

  return {
    selectedSalesPacket
  }
})(SalesPacketRequest)

export default SalesPacketRequest
