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
// import SEO from "../components/seo"

interface IndexPageInterface {
  location: {
    pathname: string
  },
  data: {
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
            }
          }
        }
      ]
    }
  }
}

const IndexPage = (props: IndexPageInterface) => (
  <Layout location={props.location}>
    {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />*/}
    <h1>Hi people</h1>
    <p>This works {props.location.pathname}</p>
    <h4>{props.data.allMarkdownRemark.totalCount} Posts</h4>
    {/*{props.data.allMarkdownRemark.edges.map(({ node }) => (*/}
    {/*  <Link to={node.frontmatter.path} key={node.id}>*/}
    {/*    <span>*/}
    {/*      {node.frontmatter.title} — {node.frontmatter.date}*/}
    {/*    </span>*/}
    {/*    {node.fields.slug}*/}
    {/*    <p>{node.excerpt}</p>*/}
    {/*  </Link>*/}
    {/*))}*/}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <p>aaa</p>
    </div>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
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
          }
        }
      }
    }
  }
`
