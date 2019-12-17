import * as React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import { useMemo, useState } from "react"
import { palette } from "../styles/vars/colors"

interface ArticleListInterface {
  allMarkdownRemark: {
    totalCount: number
    edges: [
      {
        node: {
          id: string
          excerpt: string
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            date: string
            path: string
            categories: string[]
            tags: string[]
          }
        }
      }
    ]
  }
}

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
    color: ${props =>
      props.current ? palette.text.reverse : palette.text.primary};
    background-color: ${props => (props.current ? "#b35662" : "transparent")};
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
        content: ",";
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
  return (
    <StaticQuery
      query={query}
      render={(props: ArticleListInterface) => {
        const [posts, setPosts] = useState(props.allMarkdownRemark.edges)

        const [filterText, setFilterText] = useState("")
        const filterPosts = useMemo(() => {
          if (!filterText) return posts
          return posts.filter(post => {
            const reg = new RegExp(filterText)
            return reg.test(post.node.frontmatter.title)
          })
        }, [posts, filterText])

        return (
          <>
            <ArticleFilterInput
              type="text"
              value={filterText}
              placeholder={"Search..."}
              onChange={e => {
                setFilterText(e.target.value)
              }}
            />
            {filterPosts.map(({ node }, i) => {
              const date = new Date(node.frontmatter.date)
              return (
                <ArticleListWrapper
                  key={i}
                  current={encodeURI(node.frontmatter.path) === pathname}
                >
                  <Link to={node.frontmatter.path} key={node.id}>
                    <ArticleListTime
                      dateTime={`${date.getFullYear()}-${date.getMonth() +
                        1}-${date.getDate()}`}
                    >{`${date.getFullYear()}.${(
                      "0" + String(date.getMonth() + 1)
                    ).slice(-2)}.${("0" + String(date.getDate())).slice(
                      -2
                    )}`}</ArticleListTime>

                    <ArticleListCategoryList>
                      {node.frontmatter.categories.map((cat, i) => (
                        <li key={i}>{cat}</li>
                      ))}
                    </ArticleListCategoryList>

                    <ArticleListTitle>
                      {node.frontmatter.title}
                    </ArticleListTitle>
                  </Link>
                </ArticleListWrapper>
              )
            })}
          </>
        )
      }}
    />
  )
}

export default ArticleList

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
            categories
            tags
          }
        }
      }
    }
  }
`
