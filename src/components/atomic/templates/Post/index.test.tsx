import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Post } from './'

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
        isLoading={false}
        isSubmitted={false}
        onEnter={() => {}}
        onLeave={() => {}}
        onClick={() => {}}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
