import React from 'react';
import PropTypes from 'prop-types';

const AddressField = ({ source, record = {} }) => {
  const address = record[source];

  return (
    <span>{address.address1} {address.city}, {address.state}</span>
  )
}

export default AddressField
