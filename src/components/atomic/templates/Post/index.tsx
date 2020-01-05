import React, { memo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Mikan from 'mikanjs'
import { DateISO8601 } from '../../../../types'
import { Time } from '../../atoms/Time'
import { Toc } from '../../molecules/Toc'
import { mq } from '../../../../styles/vars/mq'
import { Container } from '../../atoms/Container'

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

  a {
    word-break: break-all;
  }

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

export type PostProps = {
  url: string
  title: string
  date: DateISO8601
  tableOfContents: string
  excerpt: string
  html: string
  isNavOpen?: boolean
  hasSHare?: boolean
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
  useEffect(() => {
    props.onEnter()
    if (focusEl.current) {
      focusEl.current.focus()
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

          <Social
            hasShare={props.hasSHare}
            title={props.title}
            url={props.url}
          />

          {props.tableOfContents && (
            <Toc tableOfContents={props.tableOfContents} />
          )}
        </PostHeader>
        <PostInner>
          <div dangerouslySetInnerHTML={{ __html: props.html }} />
          <Social
            hasShare={props.hasSHare}
            title={props.title}
            url={props.url}
          />
        </PostInner>
      </PostWrapper>
    </Container>
  )
}

export default memo(Post)
