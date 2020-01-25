import React, { memo } from 'react'
import styled from 'styled-components'
import { mq } from '../../../../styles/vars/mq'

export const Container = styled.div<{ noSidebar?: boolean }>`
  min-height: 100vh;
  padding: var(--headerHeight) var(--spaceSm);
  overflow: hidden;

  @media (${mq.sm}) {
    padding: var(--headerHeight) var(--articlePadWidth) var(--headerHeight)
      calc(var(--sidebarWidth) + var(--articlePadWidth));
    padding-left: ${(props) =>
      props.noSidebar
        ? 'var(--articlePadWidth)'
        : 'calc(var(--sidebarWidth) + var(--articlePadWidth))'};
  }

  @media (${mq.lg}) {
    padding-left: ${(props) =>
      props.noSidebar
        ? 'var(--articlePadWidth)'
        : 'calc(var(--sidebarWidth) + var(--titleWidth) + var(--articlePadWidth))'};
  }
`

export default memo(Container)
