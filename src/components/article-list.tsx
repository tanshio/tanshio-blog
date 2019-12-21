import * as React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { useEffect, useMemo, useState } from 'react'
import { palette } from '../styles/vars/colors'
import { DateString } from '../types'

type ArticleListInterface = {
  date: DateString
  title: string
  excerpt: string
  categories: string[]
  tags: string[]
  path: string
}[]

type ArticleListProps = {
  pathname: string
}

type ArticleListWrapperProps = {
  current: boolean
}

const ArticleListWrapper = styled.div<ArticleListWrapperProps>`
  & + & {
    border-top: 2px solid #1a1a1a;
  }

  & a {
    display: block;
    padding: 2rem 1rem;
    color: ${(props) =>
      props.current ? palette.text.reverse : palette.text.primary};
    background-color: ${(props) => (props.current ? '#b35662' : 'transparent')};
    text-underline-position: under;
    &:hover {
      background-color: #b35662;
      color: #fff;
    }
  }
`

const ArticleListTime = styled.time`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
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
  border-bottom: 2px solid #1a1a1a;
  font-size: 0.8rem;
`

const ArticleList = (props: ArticleListProps) => {
  const pathname = props.pathname
  const [posts, setPosts] = useState<ArticleListInterface>([])

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
        const date = new Date(post.date)
        return (
          <ArticleListWrapper
            key={i}
            current={encodeURI(post.path) === pathname}
          >
            <Link to={post.path} key={i}>
              <ArticleListTime
                dateTime={`${date.getFullYear()}-${date.getMonth() +
                  1}-${date.getDate()}`}
              >{`${date.getFullYear()}.${(
                '0' + String(date.getMonth() + 1)
              ).slice(-2)}.${('0' + String(date.getDate())).slice(
                -2
              )}`}</ArticleListTime>

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
