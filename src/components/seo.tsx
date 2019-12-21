/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  description: string
  lang?: string
  meta?: {
    name: string
    content: string
  }[]
  keywords: string[]
  title: string
  path: string
}

function Seo({ description, lang, meta, keywords, title, path }: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteUrl = site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Public+Sans:400,700&display=swap&subset=japanese"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css"
      />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `ja`,
  meta: [],
  keywords: [],
  description: ``,
}

export default Seo
