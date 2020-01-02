import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Input } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Atoms/Input',
  component: Input,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Input',
  },
}

export const Primary = () => {
  return (
    <Input
      isLoading={false}
      isSubmitted={false}
      onEnter={action('onEnter')}
      onLeave={action('onLeave')}
      onClick={action('onIncrement')}
    />
  )
}

export const Loading = () => {
  return (
    <Input
      isLoading={true}
      isSubmitted={false}
      onEnter={action('onEnter')}
      onLeave={action('onLeave')}
      onClick={action('onIncrement')}
    />
  )
}

export const Submitted = () => {
  return (
    <Input
      isLoading={false}
      isSubmitted={true}
      onEnter={action('onEnter')}
      onLeave={action('onLeave')}
      onClick={action('onIncrement')}
    />
  )
}
