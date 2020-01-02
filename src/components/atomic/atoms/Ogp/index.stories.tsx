import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Ogp } from './'
import { withA11y } from '@storybook/addon-a11y'
import { withScreenshot } from 'storycap'

export default {
  title: 'Atoms/Ogp',
  component: Ogp,
  decorators: [withKnobs, withA11y],
}

export const Primary = () => {
  return (
    <Ogp
      title={
        'Google AnalyticsでIPやCookieを判別できるようにする「PHPAnalyticsIP」を作った'
      }
    />
  )
}
