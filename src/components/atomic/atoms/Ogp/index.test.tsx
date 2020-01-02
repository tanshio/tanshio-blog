import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Ogp } from './'

afterEach(cleanup)

describe('Ogp', () => {
  // it('click', () => {
  //   const { getByText, getByTestId, container, asFragment } = render(
  //     <Ogp
  //       isLoading={false}
  //       isSubmitted={false}
  //       onEnter={() => {}}
  //       onLeave={() => {}}
  //       onClick={() => {}}
  //     />
  //   )
  //   fireEvent.click(getByText(/ogp/i))
  //   expect(getByText(/ogp/i)).toHaveTextContent('3')
  // })
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Ogp
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
