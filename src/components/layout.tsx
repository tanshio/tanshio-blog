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
import { palette } from '../styles/vars/colors'
import { counterActionCreators } from '../store/counter/actions'

interface LayoutProps {
  location?: {
    pathname: string
  }
  children: ReactNode
}

type SidebarType = {
  pathname: string
  isActive: boolean
}

const Sidebar = styled.div<SidebarType>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  overflow: auto;
  border-right: 2px solid #1a1a1a;
  background-color: ${palette.default.background};
  @media (max-width: 768px) {
    display: ${(props) => (props.isActive ? 'block' : 'none')};
  }
`

const counterSelector = (state: State) => state.counter.count

const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch()
  const count = useSelector(counterSelector)
  const increment = () => dispatch(counterActionCreators.increment(1))
  return (
    <>
      <GlobalStyles />
      <Sidebar pathname={props.location.pathname} isActive={true}>
        <Header />
        {count}
        <p>{props.location.pathname}</p>
        <button onClick={increment}>加算</button>
        <ArticleList pathname={props.location.pathname} />
      </Sidebar>
      <div>
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Layout
