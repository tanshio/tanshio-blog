import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { About } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Pages/About',
  component: About,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'About',
  },
}

export const Primary = () => {
  return <About />
}
