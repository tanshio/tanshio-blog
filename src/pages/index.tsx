import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import About from "../components/atomic/pages/About"

const IndexPage = () => (
  <>
    <Seo
      title={'たんしおどっとねっと'}
      description={'たんしおどっとねっと'}
      keywords={[`gatsby`, `application`, `react`]}
      path={'/'}
      type={'website'}
    />
    <About/>
  </>
)

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
