import React, { memo } from 'react'
import styled from 'styled-components'
import { mq } from '../../../../styles/vars/mq'

const ModeChangeButtonWrapper = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  appearance: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border-radius: 0;
  border: 0;
  cursor: pointer;
  padding: 0;
  opacity: var(--modeButtonOpacity);
  @media (${mq.sm}) {
    width: 3rem;
    height: 3rem;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    z-index: 1;
  }

  &::before {
    left: 50%;
    margin-left: -0.5rem;
    background-color: var(--colorTextPrimary);
    border: var(--modeButtonCircleBorder);
  }
  &:after {
    background-color: var(--colorBg);
    right: 10%;
    opacity: var(--modeButtonCircleMoonOpacity);
    @media (${mq.sm}) {
      right: 22%;
    }
  }

  span {
    position: absolute;
    width: 1.4rem;
    height: 2px;
    background-color: var(--colorTextPrimary);
    top: 50%;
    left: 50%;
    margin-top: -1px;
    margin-left: -0.7rem;
    opacity: var(--modeButtonCircleSunOpacity);
    &:nth-of-type(2) {
      transform: rotate(45deg);
    }
    &:nth-of-type(3) {
      transform: rotate(90deg);
    }
    &:nth-of-type(4) {
      transform: rotate(135deg);
    }
  }
`

export type ModeChangeButtonProps = {
  onClick: () => void
}

export const ModeChangeButton = (props: ModeChangeButtonProps) => {
  return (
    <ModeChangeButtonWrapper
      aria-label={'change color mode'}
      onClick={(e) => {
        e.preventDefault()
        props.onClick()
      }}
    >
      <span role={'presentation'} />
      <span role={'presentation'} />
      <span role={'presentation'} />
      <span role={'presentation'} />
    </ModeChangeButtonWrapper>
  )
}

export default memo(ModeChangeButton)
