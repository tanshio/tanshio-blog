import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Post } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Templates/Post',
  component: Post,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Post',
  },
}

export const Primary = () => {
  return (
    <Post
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
    <Post
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
    <Post
      isLoading={false}
      isSubmitted={true}
      onEnter={action('onEnter')}
      onLeave={action('onLeave')}
      onClick={action('onIncrement')}
    />
  )
}
