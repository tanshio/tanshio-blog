---
to: src/components/atomic/<%= Directory %>/<%= h.inflection.camelize(Name) %>/index.stories.tsx
---
<%
 UpperCamelCase = h.inflection.camelize(Name)
 LowerCamelCase = h.inflection.camelize(Name, true)
%>import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { <%= UpperCamelCase %> } from './'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: '<%= h.inflection.camelize(Directory) %>/<%= UpperCamelCase %>',
  component: <%= UpperCamelCase %>,
  decorators: [
    withKnobs,
    withA11y,
    // (story: any) => (
    //   <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    // ),
  ],
  parameters: {
    componentSubtitle: '<%= UpperCamelCase %>',
  },
}

export const Primary = () => {
  return (
    <<%= UpperCamelCase %>
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
    <<%= UpperCamelCase %>
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
    <<%= UpperCamelCase %>
      isLoading={false}
      isSubmitted={true}
      onEnter={action('onEnter')}
      onLeave={action('onLeave')}
      onClick={action('onIncrement')}
    />
  )
}
