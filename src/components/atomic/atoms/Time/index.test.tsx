import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Time } from './'
import { DateISO8601 } from '../../../../types'

afterEach(cleanup)

const date = '2004-04-01T00:00:01+09:00' as DateISO8601

describe('Time', () => {
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <Time date={date} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
