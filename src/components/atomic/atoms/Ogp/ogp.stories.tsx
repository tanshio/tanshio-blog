
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Ogp } from './'
import { withA11y } from '@storybook/addon-a11y'
import { withScreenshot } from 'storycap'

export default {
  title: 'Atoms/Ogp-posts',
  component: Ogp,
  decorators: [
    withKnobs,
    withA11y,
    withScreenshot,
  ],
  parameters: {
    componentSubtitle: 'Ogp',
    screenshot: {
      skip: false,
    },
  },
}

  export const Primary0 = () => {
  return (
    <Ogp
      title={
        'WordPressだったブログをGatsby.jsでリニューアルしました'
      }
    />
  )
}
Primary0.story = {
  parameters: {
    screenshot: {
      variants: {
        '2020/2020-0229-renewal-2020': {},
      },
    },
  },
}
