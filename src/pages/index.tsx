import * as React from 'react'
import { graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import Seo from '../components/seo'

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

const SocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  li {
    margin-right: 1rem;
  }
`

const IndexPage = (props: IndexPageInterface) => (
  <>
    <Seo
      title={'たんしおどっとねっと'}
      description={'たんしおどっとねっと'}
      keywords={[`gatsby`, `application`, `react`]}
      path={'/'}
      type={'website'}
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
        <SocialList>
          <li>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 156 300"
                fill="currentColor"
              >
                <path d="M101.000,300.000 C101.000,300.000 101.000,163.000 101.000,163.000 C101.000,163.000 147.000,163.000 147.000,163.000 C147.000,163.000 154.000,110.000 154.000,110.000 C154.000,110.000 101.000,110.000 101.000,110.000 C101.000,110.000 101.000,76.000 101.000,76.000 C101.000,60.552 105.857,50.000 128.000,50.000 C128.000,50.000 156.000,50.000 156.000,50.000 C156.000,50.000 156.000,2.000 156.000,2.000 C151.113,1.351 134.503,-0.000 115.000,-0.000 C74.282,-0.000 46.000,25.336 46.000,71.000 C46.000,71.000 46.000,110.000 46.000,110.000 C46.000,110.000 0.000,110.000 0.000,110.000 C0.000,110.000 0.000,163.000 0.000,163.000 C0.000,163.000 46.000,163.000 46.000,163.000 C46.000,163.000 46.000,300.000 46.000,300.000 C46.000,300.000 101.000,300.000 101.000,300.000 Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg
                viewBox="0 0 16 16"
                width="24"
                height="24"
                fill="currentcolor"
              >
                <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z " />
              </svg>
            </a>
          </li>
          <li>
            <a href="">
              <svg
                viewBox="0 0 16 16"
                width="24"
                height="24"
                fill="currentcolor"
              >
                <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8 " />
              </svg>
            </a>
          </li>
        </SocialList>
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
