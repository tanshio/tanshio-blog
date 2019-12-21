import * as React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Posts = ({ data, pageContext }: any) => {
  console.log('---pageContext---')
  console.log(pageContext)

  console.log('data')
  console.log(data)

  if (!pageContext.posts) {
    return <div className="content">ページがありません</div>
  }

  return (
    <Layout>
      <div className="container">
        <div className="content">
          <h1>Categories</h1>
          <ul className="categories">
            {pageContext.posts.map((post: any, index: number) => {
              return (
                <li key={index} className="icon-folder">
                  <Link to={`${post.frontmatter.path}`}>
                    {post.frontmatter.title}
                  </Link>
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
  query PostsQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default Posts
