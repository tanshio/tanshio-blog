import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { counterActionCreators } from '../store/counter/actions'
import { State } from '../store'
import { useEffect, useRef } from 'react'
import SinglePost from '../components/atomic/templates/Post'
import { DateISO8601 } from '../types'

interface PostInterface {
  location: {
    pathname: string
  }
  data: {
    markdownRemark: {
      id: string
      tableOfContents: string
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
        path: string
        excerpt: string
        type: 'blog'
        categories: string[]
        tags: string[]
        ogp?: {
          publicURL: string
        }
      }
    }
  }
}

const counterSelector = (state: State) => state.counter.count

const Post = (props: PostInterface) => {
  const { tableOfContents, ...post } = props.data.markdownRemark
  const { title, excerpt } = props.data.markdownRemark.frontmatter
  console.log(post, tableOfContents)
  const date = props.data.markdownRemark.frontmatter.date as DateISO8601
  const dispatch = useDispatch()
  const count = useSelector(counterSelector)
  const increment = () => dispatch(counterActionCreators.increment(1))
  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        keywords={[`gatsby`, `application`, `react`]}
        path={post.frontmatter.path}
        type={'article'}
      />
      <SinglePost
        date={date}
        excerpt={excerpt}
        html={post.html}
        frontmatter={post.frontmatter}
        tableOfContents={tableOfContents}
        title={title}
      />
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      tableOfContents(pathToSlugField: "frontmatter.path")
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        path
        date(formatString: "MMMM DD, YYYY")
        excerpt
        categories
        tags
        ogp {
          publicURL
        }
      }
    }
  }
`
