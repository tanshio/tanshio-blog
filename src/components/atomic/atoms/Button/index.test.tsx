import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Button } from './'

afterEach(cleanup)

describe('Button', () => {
  // it('click', () => {
  //   const { getByText, getByTestId, container, asFragment } = render(
  //     <Button
  //       isLoading={false}
  //       isSubmitted={false}
  //       onEnter={() => {}}
  //       onLeave={() => {}}
  //       onClick={() => {}}
  //     />
  //   )
  //   fireEvent.click(getByText(/button/i))
  //   expect(getByText(/button/i)).toHaveTextContent('3')
  // })
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Button
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
