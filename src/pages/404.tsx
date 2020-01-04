import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GlobalStyles } from '../styles/GlobalStyle'
import styled, { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'
// const GlobalStyle = createGlobalStyle`
//   body {
//     color: red;
//   }
// `
// import Layout from "../components/layout"
import { Image } from '../components/image'
import Seo from '../components/seo'
import About from '../components/atomic/pages/About'
import { Container } from '../components/atomic/atoms/Container'
import { mq } from '../styles/vars/mq'
// import SEO from "../components/seo"

interface IndexPageInterface {
  location: {
    pathname: string
  }
  data: {}
}

const PostWrapper = styled.article`
  padding: 2rem;
  @media (${mq.sm}) {
    padding: 3rem 3rem 3rem calc(300px + 3rem);
  }
`

const PostInner = styled.div`
  padding: 0 3rem;
`

const AboutPage = (props: IndexPageInterface) => (
  <>
    <Seo
      title={'このサイトについて'}
      description={'このサイトについて'}
      path={'/about/'}
      type={'article'}
    />
    <PostWrapper>
      <h1>ページが見つかりませんでした</h1>
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
