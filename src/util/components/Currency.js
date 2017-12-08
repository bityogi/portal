import React from 'react'
import { FormattedNumber } from 'react-intl'

export default ({ value }) => (
  <FormattedNumber value={value} style={'currency'} currency='USD' />
)
