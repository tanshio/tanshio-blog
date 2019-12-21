---
to: src/components/atomic/<%= Directory %>/<%= h.inflection.camelize(Name) %>/index.test.tsx
---
<%
 UpperCamelCase = h.inflection.camelize(Name)
 LowerCamelCase = h.inflection.camelize(Name, true)
%>import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { <%= UpperCamelCase %> } from './'

afterEach(cleanup)

describe('<%= UpperCamelCase %>', () => {
  // it('click', () => {
  //   const { getByText, getByTestId, container, asFragment } = render(
  //     <<%= UpperCamelCase %>
  //       isLoading={false}
  //       isSubmitted={false}
  //       onEnter={() => {}}
  //       onLeave={() => {}}
  //       onClick={() => {}}
  //     />
  //   )
  //   fireEvent.click(getByText(/<%= LowerCamelCase %>/i))
  //   expect(getByText(/<%= LowerCamelCase %>/i)).toHaveTextContent('3')
  // })
  it('matches to the snapshot', () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <<%= UpperCamelCase %>
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
