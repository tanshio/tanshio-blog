import React, { memo, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Mikan from 'mikanjs'
import { DateISO8601 } from '../../../../types'
import { Time, TimeWrapper } from '../../atoms/Time'
import { Toc, TocWrapper } from '../../molecules/Toc'
import { mq } from '../../../../styles/vars/mq'
import { Container } from '../../atoms/Container'

import { Social, SocialWrapper } from '../../organisms/Social'

const PostWrapper = styled.div`
  a {
    color: var(--colorPrimary);
    text-decoration: underline;
    text-decoration-color: var(--colorTextDecoration);
    &:hover {
      background-color: var(--colorTextDecoration);
      color: var(--colorTextReverse);
    }
    //text-decoration-thickness: 3px;
  }

  nav {
    p {
      margin: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  li {
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    &:before,
    &:after {
      content: '';
      display: block;
    }
    &:before,
    &:after {
      content: '';
      display: block;
    }
    &:before {
      margin-top: calc((var(--lineHeight) - var(--fontSize)) * -0.5);
    }
    &:after {
      margin-bottom: calc((var(--lineHeight) - var(--fontSize)) * -0.5);
    }
  }
`

const PostHeader = styled.header`
  h1 {
    margin: 0;
    --fontSize: var(--fontSizeHeading1);
    --lineHeight: var(--lineHeightHeading1);
  }

  ${TimeWrapper} {
    margin-top: var(--spaceSm);
  }

  ${SocialWrapper} {
    margin-top: var(--spaceSm);
  }

  ${TocWrapper} {
    margin-top: var(--spaceLg);
    h2 {
      --fontSize: var(--fontSizePrimary);
      --lineHeight: var(--lineHeightParagraph);
    }
  }

  @media (${mq.lg}) {
    position: fixed;
    width: 500px;
    left: 300px;
    top: 0;
    height: 100%;
    padding: 4rem 3rem;
    border-right: 2px solid var(--colorTextPrimary);
    overflow: auto;
  }
`

const PostInner = styled.div`
  line-height: 1.8;
  margin-top: var(--spaceLg);

  .inner > * {
    margin-bottom: 0;
    &:first-child {
      margin-top: 0;
    }

    li {
      --fontSize: var(--fontSizePrimary);
      --lineHeight: var(--lineHeightParagraph);
      & + li {
        margin-top: var(--spaceXs);
      }
    }
  }

  hr {
    margin-top: var(--spaceLg);
  }

  a {
    word-break: break-all;
  }

  p,
  ul,
  ol {
    & + p,
    ul,
    ol {
      margin-top: var(--spaceMd);
    }
  }

  p {
    --fontSize: var(--fontSizePrimary);
    --lineHeight: var(--lineHeightParagraph);
    margin-top: var(--spaceMd);
  }

  h2 {
    --fontSize: var(--fontSizeHeading2);
    --lineHeight: var(--lineHeightHeading2);
  }

  h3 {
    font-size: var(--fontSizeHeading3);
  }

  h2,
  h3,
  h4,
  h5 {
    margin-top: var(--spaceXl);
    margin-bottom: 0;
    line-height: var(--lineHeightHeading2);

    & + h2,
    & + h3,
    & + h4,
    & + h5 {
      margin-top: var(--spaceSm);
    }

    & + p .gatsby-resp-image-wrapper {
      margin-top: var(--spaceMd);
    }
  }

  .gatsby-resp-iframe-wrapper {
    margin-top: var(--spaceLg);
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
    margin-top: 0;
    max-width: 800px;
  }

  .gatsby-code-title {
    margin-top: var(--spaceLg);
    & + .gatsby-highlight {
      margin-top: 0;
    }
  }

  .gatsby-highlight {
    margin-top: var(--spaceMd);
  }

  .gatsby-resp-image-wrapper {
    margin-top: var(--spaceSm);
  }
`

const PostBottom = styled.aside`
  ${SocialWrapper} {
    margin-top: var(--spaceXl2);
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
          <div
            className={'inner'}
            dangerouslySetInnerHTML={{ __html: props.html }}
          />
          <PostBottom>
            <Social
              hasShare={props.hasSHare}
              title={props.title}
              url={props.url}
            />
          </PostBottom>
        </PostInner>
      </PostWrapper>
    </Container>
  )
}

export default memo(Post)
