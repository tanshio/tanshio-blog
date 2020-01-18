import { graphql, Link, StaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import { palette } from '../styles/vars/colors'

interface HeaderInterface {
  siteTitle: string
}

const HeaderWrapper = styled.div``

const HeaderLogo = styled.h1`
  margin: 0;
  font-size: 1rem;
  text-align: center;
  border-bottom: 2px solid var(--colorTextPrimary);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: var(--headerHeight);
  a {
    display: block;
    color: var(--colorTextPrimary);
    padding: 1.5rem;
  }
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => {
      return (
        <HeaderWrapper>
          <header>
            <div>
              <HeaderLogo>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  {data.site.siteMetadata.title}
                </Link>
              </HeaderLogo>
            </div>
          </header>
        </HeaderWrapper>
      )
    }}
  />
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
