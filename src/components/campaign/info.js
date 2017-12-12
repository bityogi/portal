import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { TextField, DatePicker } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import { push as pushAction } from 'react-router-redux';

const validate = values => {
  const errors = {}

  if (!values.campaignName) {
    errors.campaignName = 'Required'
  } else if (values.campaignName.length < 5) {
    errors.campaignName = 'Must be 5 characters or less'
  }

  if (!values.checksPayableTo) {
    errors.checksPayableTo = 'Required'
  }
  return errors
}


class Info extends Component {

  handleInfo = (values) => {
    console.log('Campaign Info Values: ', values);

    this.props.history.push(`/chair/${this.props.match.params.orgId}/campaigns/new/price`)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting  } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleInfo)}>
        <div>
          <label>Campaign Name</label>
          <div>
            <Field name="campaignName" component={TextField}  />
          </div>
        </div>

        <div>
          <label>Checks Payable To</label>
          <div>
          <Field name="checksPayableTo" component={TextField}  />
          </div>
        </div>
        <div>
          <label>Start Date</label>
          <div>
          <Field name="startDate" component={DatePicker} mode="landscape" format={null} hintText="Start Date" />
          </div>
        </div>

        <div>
          <label>End Date</label>
          <div>
          <Field name="endDate" component={DatePicker} mode="landscape" format={null} hintText="Estimated End Date" />
          </div>
        </div>

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

Info = reduxForm({
  form: 'newCampaignInfo',
  validate,
  warn: () => {}
})(Info);

const mapDispatchToProps = {
  push: pushAction
}

export default connect(null, mapDispatchToProps)(Info);
