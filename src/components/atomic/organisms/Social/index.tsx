import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

const SocialWrapper = styled.div`
  display: flex;
  font-size: 0;
  @media (prefers-color-scheme: dark) {
    circle {
      fill: transparent;
      stroke-width: 2px;
      stroke: var(--colorTextPrimary);
    }
  }

  .icon-line {
    path {
      transform-origin: center;
      transform: scale(0.82);
    }
  }

  .icon-pocket {
    path {
      transform-origin: center;
      transform: scale(0.9) translateY(3%);
    }
  }

  button {
    & + button {
      margin-left: var(--spaceXs);
    }
  }
`

export type SocialProps = {
  url: string
  title: string
}

export const Social = (props: SocialProps) => {
  return (
    <SocialWrapper>
      <FacebookShareButton url={props.url}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>
      <TwitterShareButton title={props.title} url={props.url}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <LineShareButton
        title={props.title}
        url={props.url}
        className={'icon-line'}
      >
        <LineIcon size={40} round />
      </LineShareButton>
      <PocketShareButton
        title={props.title}
        url={props.url}
        className={'icon-pocket'}
      >
        <PocketIcon size={40} round />
      </PocketShareButton>
    </SocialWrapper>
  )
}

export default memo(Social)
