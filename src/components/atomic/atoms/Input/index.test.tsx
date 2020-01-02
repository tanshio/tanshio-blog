import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Input } from './'

afterEach(cleanup)

describe('Input', () => {
  // it('click', () => {
  //   const { getByText, getByTestId, container, asFragment } = render(
  //     <Input
  //       isLoading={false}
  //       isSubmitted={false}
  //       onEnter={() => {}}
  //       onLeave={() => {}}
  //       onClick={() => {}}
  //     />
  //   )
  //   fireEvent.click(getByText(/input/i))
  //   expect(getByText(/input/i)).toHaveTextContent('3')
  // })
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Input
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
