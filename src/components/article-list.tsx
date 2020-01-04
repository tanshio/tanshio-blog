import * as React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { useEffect, useMemo, useState } from 'react'
import { palette } from '../styles/vars/colors'
import { DateISO8601 } from '../types'
import { Time, TimeWrapper } from './atomic/atoms/Time'

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
    padding: 2rem 1rem;
    color: ${(props) =>
      props.current ? 'var(--colorTextReverse)' : 'var(--colorTextPrimary)'};
    background-color: ${(props) =>
      props.current ? 'var(--colorBgDark)' : 'transparent'};
    text-underline-position: under;
    text-decoration: ${(props) => (props.current ? 'underline' : 'none')};
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
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
  }
`

const ArticleListCategoryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  font-size: 0.7rem;
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
  font-size: 0.85rem;
  line-height: 1.6;
  margin-top: 0.5rem;
`

const ArticleFilterInput = styled.input`
  appearance: none;
  border: 0;
  width: 100%;
  background-color: transparent;
  padding: 1rem;
  border-bottom: 2px solid var(--colorTextPrimary);
  font-size: 0.8rem;
  color: var(--colorTextPrimary);
  border-radius: 0;
`

const ArticleList = (props: ArticleListProps) => {
  const pathname = props.pathname
  const [posts, setPosts] = useState<ArticleListInterface>([])
  const [isTouch, setIsTouch] = useState(
    /iPhone|iPad|Android/.test(navigator.userAgent)
  )

  const [filterText, setFilterText] = useState('')
  const filterPosts = useMemo(() => {
    if (!filterText) return posts
    return posts.filter((post) => {
      const reg = new RegExp(filterText)
      return reg.test(post.title)
    })
  }, [posts, filterText])

  useEffect(() => {
    const getJson = async () => {
      const res = await fetch('/search.json')
      const json = await res.json()
      setPosts(json)
    }

    getJson()

    return () => {}
  }, [])

  return (
    <>
      <ArticleFilterInput
        type="text"
        value={filterText}
        placeholder={'Search...'}
        onChange={(e) => {
          setFilterText(e.target.value)
        }}
      />
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
