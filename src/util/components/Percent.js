import React from 'react'
import { FormattedNumber } from 'react-intl'

export default ({ value }) => (
  <FormattedNumber value={value * .01} style={'percent'} maximumFractionDigits={1} />
)
