import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Seo from '../components/seo'
import { Icon } from '../components/atomic/atoms/Icon'

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

const IndexPage = () => (
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
            <a
              href="https://www.facebook.com/shota.tanno.75"
              target={'_blank'}
              rel={'noopener'}
            >
              <Icon name={'facebook'} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/_tanshio"
              target={'_blank'}
              rel={'noopener'}
            >
              <Icon name={'twitter'} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tanshio"
              target={'_blank'}
              rel={'noopener'}
            >
              <Icon name={'github'} />
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
