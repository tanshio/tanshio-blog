import * as React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withScreenshot } from 'zisui'

import { GlobalStyles } from '../src/styles/GlobalStyle'
// import '../src/styles/global.css'

const req = require.context('../src/components', true, /\.stories\.tsx$/)

addParameters({
  options: {
    name: 'VARIABLE EDITOR',
  },
})

addDecorator(withScreenshot())

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
))

configure(require.context('../src/components', true, /\.stories\.tsx$/), module)
