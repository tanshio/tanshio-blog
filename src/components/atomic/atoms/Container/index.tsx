import React, { memo } from 'react'
import styled from 'styled-components'
import { mq } from '../../../../styles/vars/mq'

export const Container = styled.div<{ noSidebar?: boolean }>`
  min-height: 100vh;
  padding: var(--headerHeight) var(--spaceSm);

  @media (${mq.sm}) {
    padding: var(--headerHeight) 3rem var(--headerHeight) calc(300px + 3rem);
    padding-left: ${(props) =>
      props.noSidebar ? '3rem' : 'calc(300px + 3rem)'};
  }

  @media (${mq.lg}) {
    padding-left: ${(props) =>
      props.noSidebar ? '3rem' : 'calc(300px + 500px + 3rem)'};
  }
`

export default memo(Container)
