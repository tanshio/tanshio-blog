import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

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
        type: "blog"
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
  padding: 0 3rem;
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
    color: #1a1a1a;
    text-decoration: underline;
    text-decoration-color: #b35662;
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

const Post = (props: PostInterface) => {
  const { ...post } = props.data.markdownRemark
  console.log(post)
  const date = new Date(props.data.markdownRemark.frontmatter.date)
  const y = `${date.getFullYear()}`
  const m = `0${String(date.getMonth() + 1)}`.slice(-2)
  const d = `0${String(date.getDate())}`.slice(-2)
  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt}
        keywords={[`gatsby`, `application`, `react`]}
        path={post.frontmatter.path}
      />
      <PostWrapper>
        <PostInner>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <time>{y + "." + m + "." + d}</time>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostInner>
      </PostWrapper>
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
