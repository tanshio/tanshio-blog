import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { DateISO8601 } from '../../../../types'
import { Time } from '../../atoms/Time'
import { Toc } from '../../molecules/Toc'
import { mq } from '../../../../styles/vars/mq'

const PostWrapper = styled.article`
  min-height: 100vh;
  padding: 2rem;

  @media (${mq.sm}) {
    padding: 3rem 3rem 3rem calc(300px + 3rem);
  }

  @media (${mq.md}) {
    padding: 3rem 3rem 3rem calc(300px + 3rem);
  }

  @media (${mq.lg}) {
    padding: 3rem 3rem 3rem calc(800px + 3rem);
  }
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

export type PostProps = {
  title: string
  date: DateISO8601
  tableOfContents: string
  excerpt: string
  html: string
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
    if (focusEl.current) {
      focusEl.current.focus()
    }
    return () => {}
  }, [])
  return (
    <PostWrapper tabIndex={1} ref={focusEl}>
      <PostHeader>
        <h1>{props.title}</h1>
        <Time date={props.date} />
        {props.tableOfContents && (
          <Toc tableOfContents={props.tableOfContents} />
        )}
      </PostHeader>
      <PostInner>
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </PostInner>
    </PostWrapper>
  )
}

export default memo(Post)
