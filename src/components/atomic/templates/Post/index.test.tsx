import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Post } from './'
import { DateISO8601 } from '../../../../types'

afterEach(cleanup)

describe('Post', () => {
  // it('click', () => {
  //   const { getByText, getByTestId, container, asFragment } = render(
  //     <Post
  //       isLoading={false}
  //       isSubmitted={false}
  //       onEnter={() => {}}
  //       onLeave={() => {}}
  //       onClick={() => {}}
  //     />
  //   )
  //   fireEvent.click(getByText(/post/i))
  //   expect(getByText(/post/i)).toHaveTextContent('3')
  // })
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
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
    expect(asFragment()).toMatchSnapshot()
  })
})
