import * as React from "react"
import { Link, graphql } from "gatsby"
import { GlobalStyles } from "../styles/GlobalStyle"
import { createGlobalStyle } from "styled-components"
import Layout from "../components/layout"
// const GlobalStyle = createGlobalStyle`
//   body {
//     color: red;
//   }
// `
// import Layout from "../components/layout"
import { Image } from "../components/image"
import Seo from "../components/seo"

interface PostInterface {
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

const Post = (props: PostInterface) => {
  const { ...post } = props.data.markdownRemark
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt}
        keywords={[`gatsby`, `application`, `react`]}
        path={post.frontmatter.path}
      />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
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
      }
    }
  }
`
