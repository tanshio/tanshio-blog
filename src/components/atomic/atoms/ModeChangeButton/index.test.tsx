import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ModeChangeButton } from './'

afterEach(cleanup)

describe('ModeChangeButton', () => {
  // it('click', () => {
  //   const { getByText, getByTestId, container, asFragment } = render(
  //     <ModeChangeButton
  //       isLoading={false}
  //       isSubmitted={false}
  //       onEnter={() => {}}
  //       onLeave={() => {}}
  //       onClick={() => {}}
  //     />
  //   )
  //   fireEvent.click(getByText(/modeChangeButton/i))
  //   expect(getByText(/modeChangeButton/i)).toHaveTextContent('3')
  // })
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <ModeChangeButton onClick={() => {}} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
