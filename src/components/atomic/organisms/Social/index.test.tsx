import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Social } from './'

afterEach(cleanup)

describe('Social', () => {
  // it('click', () => {
  //   const { getByText, getByTestId, container, asFragment } = render(
  //     <Social
  //       isLoading={false}
  //       isSubmitted={false}
  //       onEnter={() => {}}
  //       onLeave={() => {}}
  //       onClick={() => {}}
  //     />
  //   )
  //   fireEvent.click(getByText(/social/i))
  //   expect(getByText(/social/i)).toHaveTextContent('3')
  // })
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Social
        hasShare={false}
        title={'たんしおどっとねっと'}
        url={'https://tanshio.net'}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
