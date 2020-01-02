import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Time } from './'
import { withA11y } from '@storybook/addon-a11y'
import { DateISO8601 } from '../../../../types'

export default {
  title: 'Atoms/Time',
  component: Time,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Time',
  },
}

const date = '2004-04-01T00:00:01+09:00' as DateISO8601

export const Primary = () => {
  return <Time date={date} />
}
