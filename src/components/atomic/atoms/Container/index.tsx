import React, { memo } from 'react'
import styled from 'styled-components'
import { mq } from '../../../../styles/vars/mq'

export const Container = styled.div<{ noSidebar?: boolean }>`
  min-height: 100vh;
  padding: 2rem;

  @media (${mq.sm}) {
    padding: 3rem 3rem 3rem calc(300px + 3rem);
    padding-left: ${(props) =>
      props.noSidebar ? '3rem' : 'calc(300px + 3rem)'};
  }

  @media (${mq.lg}) {
    padding-left: ${(props) =>
      props.noSidebar ? '3rem' : 'calc(300px + 500px + 3rem)'};
  }
`

export default memo(Container)
