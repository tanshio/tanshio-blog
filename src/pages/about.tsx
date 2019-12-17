import * as React from "react"
import { Link, graphql } from "gatsby"
import { GlobalStyles } from "../styles/GlobalStyle"
import styled, { createGlobalStyle } from "styled-components"
import Layout from "../components/layout"
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
  data: {}
}

const PostWrapper = styled.article`
  padding-left: 300px;
`

const PostInner = styled.div`
  padding: 0 3rem;
`

const AboutPage = (props: IndexPageInterface) => (
  <>
    <Seo
      title={"あばうと"}
      description={"たんしおどっとねっと"}
      keywords={[`gatsby`, `application`, `react`]}
      path={"/"}
    />
    <PostWrapper>
      <PostInner>
        {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />*/}
        <h1>Hi people</h1>
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
      </PostInner>
    </PostWrapper>
  </>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default AboutPage
