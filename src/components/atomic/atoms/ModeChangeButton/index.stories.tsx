import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { ModeChangeButton } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Atoms/ModeChangeButton',
  component: ModeChangeButton,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'ModeChangeButton',
  },
}

export const Primary = () => {
  return <ModeChangeButton onClick={action('onIncrement')} />
}
