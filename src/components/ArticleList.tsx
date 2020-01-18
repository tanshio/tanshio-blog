import * as React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { useEffect, useMemo, useState } from 'react'
import { palette } from '../styles/vars/colors'
import { DateISO8601 } from '../types'
import { Time, TimeWrapper } from './atomic/atoms/Time'
import { mq } from '../styles/vars/mq'

type ArticleListInterface = {
  date: DateISO8601
  title: string
  excerpt: string
  categories: string[]
  tags: string[]
  path: string
}[]

type ArticleListProps = {
  pathname: string
  filterText: string
  onLinkClick: () => void
}

type ArticleListWrapperProps = {
  current: boolean
  isTouch: boolean
}

const ArticleListWrapper = styled.div<ArticleListWrapperProps>`
  & + & {
    border-top: 2px solid var(--colorTextPrimary);
  }

  & a {
    display: block;
    padding: var(--spaceMd) var(--spaceSm);
    color: ${(props) =>
      props.current ? 'var(--colorTextReverse)' : 'var(--colorTextPrimary)'};
    background-color: ${(props) =>
      props.current ? 'var(--colorBgDark)' : 'transparent'};
    text-underline-position: under;
    text-decoration: ${(props) => (props.current ? 'underline' : 'none')};
    @media (${mq.sm}) {
      padding: var(--spaceMd) var(--spaceSm);
    }
  }

  &:not(.isTouch) {
    a {
      &:hover {
        background-color: var(--colorBgDark);
        color: var(--colorTextReverse);
        text-decoration: underline;
      }
    }
  }

  ${TimeWrapper} {
    display: block;
    font-size: var(--fontSizeSm3);
  }
`

const ArticleListCategoryList = styled.ul`
  margin: 0;
  margin-top: var(--spaceXs);
  padding: 0;
  list-style-type: none;
  display: flex;
  font-size: var(--fontSizeSm3);
  li {
    &:not(:last-of-type) {
      &:after {
        content: ',';
        margin-left: 0.2rem;
        margin-right: 0.4rem;
      }
    }
  }
`

const ArticleListTitle = styled.div`
  --fontSize: var(--fontSizeSm2);
  --lineHeight: var(--lineHeightLinkList);
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  margin-top: var(--spaceSm);
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
`

const ArticleList = (props: ArticleListProps) => {
  const pathname = props.pathname
  const [posts, setPosts] = useState<ArticleListInterface>([])
  const [isTouch, setIsTouch] = useState(false)

  const [filterText, setFilterText] = useState(props.filterText)
  const filterPosts = useMemo(() => {
    if (!filterText) return posts
    return posts.filter((post) => {
      const reg = new RegExp(filterText)
      return reg.test(post.title)
    })
  }, [posts, filterText])

  useEffect(() => {
    if (navigator) {
      ;/iPhone|iPad|Android/.test(navigator.userAgent)
    }

    const getJson = async () => {
      const res = await fetch('/search.json')
      const json = await res.json()
      setPosts(json)
    }

    getJson()

    return () => {}
  }, [])

  useEffect(() => {
    setFilterText(props.filterText)
  }, [props.filterText])

  return (
    <>
      {filterPosts.map((post, i) => {
        return (
          <ArticleListWrapper
            key={i}
            current={encodeURI(post.path) === pathname}
            isTouch={isTouch}
            className={isTouch ? 'isTouch' : ''}
          >
            <Link
              to={post.path}
              key={i}
              onClick={() => {
                props.onLinkClick()
              }}
            >
              <Time date={post.date} />
              <ArticleListCategoryList>
                {post.categories.map((cat, i) => (
                  <li key={i}>{cat}</li>
                ))}
              </ArticleListCategoryList>

              <ArticleListTitle>{post.title}</ArticleListTitle>
            </Link>
          </ArticleListWrapper>
        )
      })}
    </>
  )
}

export default ArticleList
