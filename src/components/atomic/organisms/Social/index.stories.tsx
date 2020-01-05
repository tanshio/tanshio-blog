import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Social } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Organisms/Social',
  component: Social,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Social',
  },
}

export const Primary = () => {
  return <Social title={'たんしおどっとねっと'} url={'https://tanshio.net'} />
}
