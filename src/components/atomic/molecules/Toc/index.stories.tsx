import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Toc } from './'
import { withA11y } from '@storybook/addon-a11y'
import { withScreenshot } from 'storycap'

export default {
  title: 'Molecules/Toc',
  component: Toc,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: 'Toc',
  },
}

export const Primary = () => {
  return <Toc tableOfContents={''} />
}

export const Secondary = () => {
  return <Toc tableOfContents={''} />
}
