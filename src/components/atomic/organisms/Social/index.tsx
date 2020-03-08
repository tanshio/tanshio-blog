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

export const SocialWrapper = styled.ul`
  display: flex;
  font-size: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;

  circle {
    fill: transparent;
    stroke-width: var(--shareIconStrokeWidth);
    stroke: var(--shareIconStrokeColor);
  }

  .icon-fb {
    circle {
      fill: var(--colorIconFb);
    }
  }

  .icon-tw {
    circle {
      fill: var(--colorIconTw);
    }
  }

  .icon-line {
    path {
      transform-origin: center;
      transform: scale(0.82);
    }

    circle {
      fill: var(--colorIconLine);
    }
  }

  .icon-pocket {
    path {
      transform-origin: center;
      transform: scale(0.9) translateY(3%);
    }

    circle {
      fill: var(--colorIconPocket);
    }
  }

  li {
    & + li {
      margin-left: var(--spaceXs);
    }
  }
`

const ShareButton = styled.button`
  appearance: none;
  padding: 0;
  border: 0;
  background-color: transparent;
  position: relative;
  display: none;
  cursor: pointer;
  &.hasShare {
    display: inline-block;
  }
  circle {
    stroke-width: var(--shareIconNativeStrokeWidth);
    stroke: var(--shareIconNativeStrokeColor);
    fill: var(--shareIconNativeFillColor);
  }
  .icon-share {
    position: absolute;
    top: calc(50% - 12px);
    left: calc(50% - 13px);
    width: 27px;
    height: 24px;
    transform: scale(0.9);
    path {
      fill: var(--shareIconNativeIconColor);
    }
  }
`

export type SocialProps = {
  hasShare?: boolean
  url: string
  title: string
}

export const Social = (props: SocialProps) => {
  return (
    <SocialWrapper>
      <li>
        <FacebookShareButton url={props.url} className={'icon-fb'}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton
          title={props.title}
          url={props.url}
          className={'icon-tw'}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </li>
      <li>
        <LineShareButton
          title={props.title}
          url={props.url}
          className={'icon-line'}
        >
          <LineIcon size={40} round />
        </LineShareButton>
      </li>
      <li>
        <PocketShareButton
          title={props.title}
          url={props.url}
          className={'icon-pocket'}
        >
          <PocketIcon size={40} round />
        </PocketShareButton>
      </li>
      <li>
        <ShareButton
          className={props.hasShare ? 'hasShare' : ''}
          type={'button'}
          onClick={(e) => {
            e.preventDefault()
            let n = window.navigator
            if (n.share) {
              n.share({
                title: props.title,
                text: props.title,
                url: location.href,
              })
            }
          }}
        >
          <svg viewBox="0 0 64 64" width="40" height="40">
            <circle cx="32" cy="32" r="31" fill="#00aced"></circle>
          </svg>
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className={'icon-share'}
          >
            <g className="fa-group">
              <path
                className="fa-secondary"
                d="M567.69 226.16l-176 152C376.3 391.44 352 380.69 352 360v-15.83l108.61-93.79a56 56 0 0 0 0-84.76L352 71.83V56c0-20.66 24.28-31.46 39.69-18.16l176 152a24 24 0 0 1 0 36.32z"
                opacity="0.4"
              />
              <path
                className="fa-primary"
                d="M439.69 226.16l-176 152C248.3 391.44 224 380.69 224 360v-84.19c-108.67 12.53-151.1 58.85-112.59 182 5 16.09-14.42 28.56-28.08 18.63C39.58 444.63 0 383.77 0 322.33 0 191 94.82 149 224 138.78V56c0-20.66 24.28-31.46 39.69-18.16l176 152a24 24 0 0 1 0 36.32z"
              />
            </g>
          </svg>
        </ShareButton>
      </li>
    </SocialWrapper>
  )
}

export default memo(Social)
