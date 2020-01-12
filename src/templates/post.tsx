import * as React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../store'
import SinglePost from '../components/atomic/templates/Post'
import { DateISO8601 } from '../types'

interface PostInterface {
  location: {
    pathname: string
    href: string
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
        type: 'blog'
        categories: string[]
        tags: string[]
        ogp?: {
          publicURL: string
        }
      }
    }
  }
}

const isOpenSelector = (state: State) => state.nav.isOpen
const hasShareSelector = (state: State) => state.share.hasShare

const Post = (props: PostInterface) => {
  const dispatch = useDispatch()
  const { tableOfContents, ...post } = props.data.markdownRemark
  const { title, excerpt } = props.data.markdownRemark.frontmatter
  const date = props.data.markdownRemark.frontmatter.date as DateISO8601
  const isOpen = useSelector(isOpenSelector)
  const hasShare = useSelector(hasShareSelector)
  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
        keywords={[`gatsby`, `application`, `react`]}
        path={post.frontmatter.path}
        ogp={post.frontmatter.ogp && post.frontmatter.ogp.publicURL}
        type={'article'}
      />
      <SinglePost
        isNavOpen={isOpen}
        hasSHare={hasShare}
        onEnter={() => {
          // dispatch(navActionCreators.close())
        }}
        url={props.location.href}
        date={date}
        excerpt={excerpt}
        html={post.html}
        frontmatter={post.frontmatter}
        tableOfContents={tableOfContents}
        title={title}
      />
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
        ogp {
          publicURL
        }
      }
    }
  }
`
