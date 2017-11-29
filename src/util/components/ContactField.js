import React from 'react';
import PropTypes from 'prop-types';

const ContactField = ({ source, record = {} }) => {
  const contact = record[source];

  return (
    <span>{contact.firstName} {contact.lastName}</span>
  )
}

export default ContactField
