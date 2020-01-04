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
import { navActionCreators } from '../store/nav/actions'
import { useRef } from 'react'

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
  width: 100%;
  height: 100%;
  overflow: auto;
  border-right: 2px solid var(--colorTextPrimary);
  background-color: var(--colorBg);
  visibility: ${(props) =>
    props.isOpen || isClearedSidebarPages(props.pathname)
      ? 'visible'
      : 'hidden'};
  z-index: 1;
  @media (${mq.sm}) {
    width: 300px;
    visibility: visible;
  }
`

type MenuButtonType = {
  pathname: string
  isOpen: boolean
}

const MenuButton = styled.button<MenuButtonType>`
  position: fixed;
  appearance: none;
  padding: 8px 4px;
  width: 2rem;
  border: 0;
  background-color: transparent;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: 3;
  span {
    display: block;
    height: 1px;
    background-color: var(--colorTextPrimary);
    & + span {
      margin-top: 3px;
    }
  }
  @media (${mq.sm}) {
    display: none;
  }

  ${(props) => props.pathname === '/' && 'display: none'}
`

const isOpenSelector = (state: State) => state.nav.isOpen

const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenSelector)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <GlobalStyles />
      <Sidebar
        tabIndex={0}
        pathname={props.location.pathname}
        isOpen={isOpen}
        ref={menuRef}
      >
        <Header />
        <ArticleList
          pathname={props.location.pathname}
          onLinkClick={() => {
            dispatch(navActionCreators.close())
          }}
        />
      </Sidebar>
      <div>
        <MenuButton
          pathname={props.location.pathname}
          isOpen={isOpen}
          type={'button'}
          aria-label={'MENU'}
          aria-expanded={isOpen}
          ref={menuButtonRef}
          onClick={(e) => {
            e.preventDefault()
            if (isOpen) {
              dispatch(navActionCreators.close())
            } else {
              dispatch(navActionCreators.open())

              setTimeout(() => {
                if (menuRef.current) {
                  menuRef.current.focus()
                }
              }, 150)
            }
          }}
        >
          <span />
          <span />
          <span />
        </MenuButton>
        <main>{props.children}</main>
      </div>
    </>
  )
}

Layout.defaultProps = {
  location: {
    pathname: '',
  },
}

export default Layout
