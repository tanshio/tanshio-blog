/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import { ReactNode } from 'react'
import { GlobalStyles } from '../styles/GlobalStyle'
import ArticleList from './article-list'
import { State } from '../store'
import styled from 'styled-components'
import { mq } from '../styles/vars/mq'

interface LayoutProps {
  location: {
    pathname: string
  }
  children: ReactNode
}

type SidebarType = {
  pathname: string
  isOpen: boolean
}

const isClearedSidebarPages = (pathname: string) => {
  return ['/'].indexOf(pathname) > -1
}

const Sidebar = styled.div<SidebarType>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  overflow: auto;
  border-right: 2px solid var(--colorTextPrimary);
  background-color: var(--colorBg);
  display: ${(props) =>
    props.isOpen || isClearedSidebarPages(props.pathname) ? 'block' : 'none'};
  @media (${mq.sm}) {
    display: block;
  }
`

const isOpenSelector = (state: State) => state.nav.isOpen

const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenSelector)
  return (
    <>
      <GlobalStyles />
      <Sidebar pathname={props.location.pathname} isOpen={isOpen}>
        <Header />
        <ArticleList pathname={props.location.pathname} />
      </Sidebar>
      <div>
        <main>{props.children}</main>
      </div>
    </>
  )
}

Layout.defaultProps = {
  location: {
    pathname: ''
  }
}

export default Layout
