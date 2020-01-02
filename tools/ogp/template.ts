export const POST_PATH = './src/posts'

export const templateMain = `
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
`

export const templateLoopPosition = (n: number, title: string, dir: string) => {
  return `
  export const Primary${n} = () => {
  return (
    <Ogp
      title={
        '${title}'
      }
    />
  )
}
Primary${n}.story = {
  parameters: {
    screenshot: {
      variants: {
        '${dir}': {},
      },
    },
  },
}
`
}
