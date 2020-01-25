import React, { useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Content } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Templates/Content',
  component: Content,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Content',
  },
}

export const Primary = () => {
  return <Content />
}
