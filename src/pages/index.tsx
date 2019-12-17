import * as React from "react"
import { Link, graphql } from "gatsby"
import { GlobalStyles } from "../styles/GlobalStyle"
import styled, { createGlobalStyle } from "styled-components"
import Layout from "../components/layout"
import Helmet from "react-helmet"
// const GlobalStyle = createGlobalStyle`
//   body {
//     color: red;
//   }
// `
// import Layout from "../components/layout"
import { Image } from "../components/image"
import Seo from "../components/seo"
// import SEO from "../components/seo"

interface IndexPageInterface {
  location: {
    pathname: string
  }
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

const PostWrapper = styled.article`
  padding-left: 300px;
`

const PostInner = styled.div`
  padding: 0 3rem;
  h1 {
    span {
      display: block;
    }
  }
`

const IndexPage = (props: IndexPageInterface) => (
  <>
    <Seo
      title={"Gastbyサンプル"}
      description={"たんしおどっとねっと"}
      keywords={[`gatsby`, `application`, `react`]}
      path={"/"}
    />
    <PostWrapper>
      <PostInner>
        <h1>
          <span>ABOUT</span>
          <span>たんしお / 丹野 翔太について</span>
        </h1>
        <p>
          仙台でフリーのWebデザイナーとして働いています。なんでもやる感じです。
        </p>
      </PostInner>
    </PostWrapper>
  </>
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
