import React, { memo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Mikan from 'mikanjs'
import { DateISO8601 } from '../../../../types'
import { Time } from '../../atoms/Time'
import { Toc } from '../../molecules/Toc'
import { mq } from '../../../../styles/vars/mq'
import { Container } from '../../atoms/Container'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
} from 'react-share'
import { Social } from '../../organisms/Social'

const PostWrapper = styled.div`
  a {
    color: var(--colorPrimary);
    text-decoration: underline;
    text-decoration-color: var(--colorTextDecoration);
    will-change: opacity;
    &:hover {
      opacity: 0.5;
    }
    //text-decoration-thickness: 3px;
  }

  nav {
    line-height: 1.8;
    p {
      margin: 0;
    }
  }
`

const PostHeader = styled.header`
  h1 {
    margin: 0;
    font-size: var(--fontSizeHeading1);
  }

  @media (${mq.lg}) {
    position: fixed;
    width: 500px;
    left: 300px;
    top: 0;
    height: 100%;
    padding: 3rem;
    border-right: 2px solid var(--colorTextPrimary);
  }
`

const PostInner = styled.div`
  line-height: 1.8;

  p,
  ul,
  ol {
    line-height: 1.8;
    & + p,
    ul,
    ol {
      margin-top: 1.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    &:before {
      content: '';
      display: block;
      margin-top: -0.5em;
    }
  }

  h3 {
    font-size: 1.75rem;
  }

  h2,
  h3,
  h4,
  h5 {
    margin-top: 5rem;
    margin-bottom: 0;
    line-height: 1.4;
  }

  @media (min-width: 900px) {
    .gatsby-resp-iframe-wrapper {
      height: auto !important;
      padding-bottom: 0 !important;
      width: auto !important;
      iframe {
        position: static !important;
        width: 800px !important;
        height: 450px !important;
      }
    }
  }

  @media (${mq.lg}) {
    max-width: 800px;
  }
`

const Share = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  width: 100%;
  appearance: none;
  border-radius: 0;
  border: 0;
  background-color: var(--colorBgDark);
  padding: 0;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  display: none;
  @media (prefers-color-scheme: dark) {
    border-top: 2px solid var(--colorTextPrimary);
    background-color: var(--colorBg);
  }

  &.hasShare {
    display: flex;
    @media (${mq.lg}) {
      padding-left: 300px;
    }
  }

  svg {
    fill: #fff;
    width: 27px;
    height: 24px;
    margin-right: var(--spaceXs);
  }
`

export type PostProps = {
  url: string
  title: string
  date: DateISO8601
  tableOfContents: string
  excerpt: string
  html: string
  isNavOpen?: boolean
  onEnter: () => void
  frontmatter: {
    title: string
    date: string
    path: string
    excerpt: string
    type: string
    categories: string[]
    tags: string[]
  }
}

export const Post = (props: PostProps) => {
  const focusEl = useRef<HTMLElement>(null)
  const [hasShare, setHasShare] = useState(false)
  console.log(props.frontmatter.path)
  useEffect(() => {
    props.onEnter()
    if (focusEl.current) {
      focusEl.current.focus()
    }
    let n = window.navigator as any
    if (n.share) {
      setHasShare(true)
    }
    return () => {}
  }, [])

  useEffect(() => {
    if (props.isNavOpen) {
      if (focusEl.current) {
        focusEl.current.blur()
      }
    } else {
      if (focusEl.current) {
        focusEl.current.focus()
      }
    }
    return () => {}
  }, [props.isNavOpen])
  return (
    <Container tabIndex={props.isNavOpen ? -1 : 0} as={'article'} ref={focusEl}>
      <PostWrapper>
        <PostHeader>
          <h1
            dangerouslySetInnerHTML={{
              __html: Mikan(props.title),
            }}
          />
          <Time date={props.date} />

          <Social url={props.url} />

          {props.tableOfContents && (
            <Toc tableOfContents={props.tableOfContents} />
          )}
        </PostHeader>
        <PostInner>
          <div dangerouslySetInnerHTML={{ __html: props.html }} />
          <Social url={props.url} />
        </PostInner>
        <Share
          className={hasShare ? 'hasShare' : ''}
          onClick={(e) => {
            e.preventDefault()
            let n = window.navigator as any
            if (n.share) {
              n.share({
                title: props.title,
                text: props.title,
                url: location.href,
              })
            }
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
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
          Share
        </Share>
      </PostWrapper>
    </Container>
  )
}

export default memo(Post)
