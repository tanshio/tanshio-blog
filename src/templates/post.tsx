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
  const { ...post } = props.data.markdownRemark
  const tableOfContents = post.tableOfContents || ''
  const frontmatter = props.data.markdownRemark?.frontmatter || {
    title: '',
    date: '',
    path: '',
    excerpt: '',
    type: 'blog',
    categories: [],
    tags: [],
    ogp: {
      publicURL: '',
    },
  }
  const title = frontmatter ? frontmatter.title : ''
  const excerpt = frontmatter ? frontmatter.excerpt : ''
  const date = frontmatter
    ? (frontmatter.date as DateISO8601)
    : ('' as DateISO8601)
  const isOpen = useSelector(isOpenSelector)
  const hasShare = useSelector(hasShareSelector)
  return (
    <>
      <Seo
        title={title}
        description={excerpt}
        path={frontmatter.path}
        ogp={frontmatter.ogp && frontmatter.ogp.publicURL}
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
        frontmatter={frontmatter}
        tableOfContents={tableOfContents || ''}
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
