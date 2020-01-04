import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Container } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Atoms/Container',
  component: Container,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Container',
    info: 'コンテナー',
  },
}

export const Primary = () => {
  return (
    <Container>
      <h1>Title</h1>
    </Container>
  )
}

export const NoSidebar = () => {
  return (
    <Container noSidebar>
      <h1>Title</h1>
    </Container>
  )
}
