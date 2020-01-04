import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Icon } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Icon',
  },
}

export const Twitter = () => {
  return <Icon name={'twitter'} />
}

export const Facebook = () => {
  return <Icon name={'facebook'} />
}

export const GitHub = () => {
  return <Icon name={'github'} />
}
