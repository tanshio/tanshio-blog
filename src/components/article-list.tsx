import * as React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

interface ArticleListInterface {
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

type ArticleListProps = {
  location: string
}

const ArticleList = (props: ArticleListProps) => {
  const pathname = props.location.pathname
  return (
    <StaticQuery
      query={query}
      render={(props: ArticleListInterface) => {
        return (
          <>
            {pathname}
            {props.allMarkdownRemark.edges.map(({ node }) => (
              <Link to={node.frontmatter.path} key={node.id}>
                <span>
                  {node.frontmatter.title} — {node.frontmatter.date}
                </span>
                {node.fields.slug}
                <p>{node.excerpt}</p>
              </Link>
            ))}
          </>
        )
      }}
    />
  )
}

export default ArticleList

export const query = graphql`
  query {
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
