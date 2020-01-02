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
      }
    }
  }
}

const PostWrapper = styled.article`
  padding-left: 300px;
`

const PostInner = styled.div`
  padding: 0 3rem 3rem;
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

  a {
    color: var(--colorPrimary);
    text-decoration: underline;
    text-decoration-color: var(--colorTextDecoration);
    //text-decoration-thickness: 3px;
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
`

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
        description={post.excerpt}
        keywords={[`gatsby`, `application`, `react`]}
        path={post.frontmatter.path}
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
      }
    }
  }
`
