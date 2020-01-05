import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { Post } from './'
import { withA11y } from '@storybook/addon-a11y'
import { DateISO8601 } from '../../../../types'

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
      onEnter={() => {}}
      title={'test'}
      tableOfContents={''}
      frontmatter={{
        path: '',
        categories: [],
        date: '2018-01-01' as DateISO8601,
        excerpt: '',
        tags: [],
        title: '',
        type: 'blog',
      }}
      html={''}
      excerpt={''}
      date={'2018-01-01' as DateISO8601}
      url={''}
      isNavOpen={false}
    />
  )
}
