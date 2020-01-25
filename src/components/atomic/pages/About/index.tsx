import React, { memo } from 'react'
import styled from 'styled-components'
import { mq } from '../../../../styles/vars/mq'
import { Profile, ProfileWrapper } from '../../templates/Profile'

const AboutWrapper = styled.article`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${mq.sm}) {
    padding-left: 300px;
  }
`

const AboutInner = styled.div`
  ${ProfileWrapper} {
    padding: var(--headerHeight) 0;
    margin: 0 var(--spaceSm);
    max-width: 48rem;
    &:before {
      display: none;
    }
  }
`

export const About = () => {
  return (
    <AboutWrapper>
      <AboutInner>
        <Profile />
      </AboutInner>
    </AboutWrapper>
  )
}

export default memo(About)
