import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const CategoryAll = ({ data, pageContext }: any) => {
  if (!pageContext.categories) {
    return <div className="content">aaa</div>
  }

  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1>Categories</h1>
          <ul className="categories">
            {pageContext.categories.map((category: any, index: any) => {
              return (
                <li key={index} className="icon-folder">
                  <Link to={`/blog/category/${category}`}>{category}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CategoryAllQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default CategoryAll
