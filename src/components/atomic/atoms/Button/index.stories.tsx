import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Button } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Atoms/Button',
  component: Button,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Button',
  },
}

export const Primary = () => {
  return (
    <Button
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
    <Button
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
    <Button
      isLoading={false}
      isSubmitted={true}
      onEnter={action('onEnter')}
      onLeave={action('onLeave')}
      onClick={action('onIncrement')}
    />
  )
}
