import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Mikan from 'mikanjs'
import { DateISO8601 } from '../../../../types'
import { Time, TimeWrapper } from '../../atoms/Time'
import { Toc, TocWrapper } from '../../molecules/Toc'
import { mq } from '../../../../styles/vars/mq'
import { Container } from '../../atoms/Container'

import { Social, SocialWrapper } from '../../organisms/Social'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'
import { searchActionCreators } from '../../../../store/search/actions'
import { navigate } from '@reach/router'
import { Profile } from '../Profile'
import { Content } from '../Content'

const CatList = styled.ul`
  list-style: none;
  margin: calc(var(--spaceSm) * 0.5 + calc(var(--spaceXs) * -0.5)) 0
    calc(var(--spaceXs) * -0.5 + var(--spaceMd));
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    font-size: var(--fontSizeSm1);
    line-height: 1;
    margin-top: calc(var(--spaceXs) * 0.5);
    margin-bottom: calc(var(--spaceXs) * 0.5);
    margin-right: var(--spaceXs);
    a {
      display: block;
      padding: calc(var(--spaceXs) * 0.5) var(--spaceXs);
      border: 1px solid var(--colorTextPrimary);
      border-radius: 100px;
      text-decoration: none;
      color: var(--colorTextPrimary);
      &:hover {
        color: var(--colorTextReverse);
        background-color: var(--colorCatHover);
        border-color: var(--colorCatHover);
      }
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
    @media (${mq.lg}) {
      margin-top: var(--spaceLg);
    }
  }

  @media (${mq.lg}) {
    position: fixed;
    width: var(--titleWidth);
    left: var(--sidebarWidth);
    top: 0;
    height: 100%;
    padding: var(--headerHeight) var(--articlePadWidth);
    border-right: 2px solid var(--colorTextPrimary);
    overflow: auto;
    z-index: 1;
    background-color: var(--colorBg);
  }
`
const PostWrapper = styled.div`
  nav {
    p {
      margin: 0;
    }
  }
`

const PostInner = styled.div`
  line-height: 1.8;
  margin-top: var(--spaceLg);

  @media (${mq.lg}) {
    margin-top: 0;
    max-width: 800px;
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
  const dispatch = useDispatch()
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

  const checkMq = useCallback(() => {
    if (!window.matchMedia(`(${mq.sm})`).matches) {
      navigate('?open')
    }
  }, [])

  return (
    <Container tabIndex={props.isNavOpen ? -1 : 0} as={'article'} ref={focusEl}>
      <PostWrapper>
        <PostHeader>
          <Content>
            <h1
              dangerouslySetInnerHTML={{
                __html: props.title ? Mikan(props.title) : '',
              }}
            />
            <Time date={props.date} />
          </Content>

          {(props.frontmatter.categories || props.frontmatter.tags) && (
            <CatList>
              {props.frontmatter.categories.map((cat, i) => (
                <li key={i}>
                  <Link
                    rel={'nofollow'}
                    to={`/?s=${cat}`}
                    onClick={(e) => {
                      e.preventDefault()
                      dispatch(searchActionCreators.search(cat))
                      checkMq()
                    }}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
              {props.frontmatter.tags.map((tag, i) => (
                <li key={i}>
                  <Link
                    rel={'nofollow'}
                    to={`/?s=${tag}`}
                    onClick={(e) => {
                      e.preventDefault()
                      dispatch(searchActionCreators.search(tag))
                      checkMq()
                    }}
                  >
                    {tag}
                  </Link>
                </li>
              ))}
            </CatList>
          )}

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
          <Content dangerouslySetInnerHTML={{ __html: props.html }} />
          <PostBottom>
            <Social
              hasShare={props.hasSHare}
              title={props.title}
              url={props.url}
            />
          </PostBottom>
          <Profile />
        </PostInner>
      </PostWrapper>
    </Container>
  )
}

export default memo(Post)
