/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import { ReactNode, useEffect } from 'react'
import { GlobalStyles } from '../styles/GlobalStyle'
import ArticleList from './ArticleList'
import { State } from '../store'
import styled from 'styled-components'
import { mq } from '../styles/vars/mq'
import { navActionCreators } from '../store/nav/actions'
import { useRef } from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

interface LayoutProps {
  location: {
    pathname: string
    search: string
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

  &.isOpen {
    span {
      &:nth-of-type(1) {
        transform: translateY(4px) rotate(45deg);
      }

      &:nth-of-type(3) {
        transform: translateY(-4px) rotate(-45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }
    }
  }

  ${(props) => props.pathname === '/' && 'display: none'}
`

const SmpNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid var(--colorTextPrimary);
  a {
    color: var(--colorTextPrimary);
    text-decoration: none;
    display: block;
    padding: 1rem;
    font-size: var(--fontSizeSm);
    line-height: 1;
  }
  
  @media (${mq.sm}) {
    display: none;
  }
`

const isOpenSelector = (state: State) => state.nav.isOpen

const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenSelector)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (/open/.test(props.location.search)) {
      dispatch(navActionCreators.open())
    }

    if (!/open/.test(props.location.search) && isOpen) {
      dispatch(navActionCreators.close())
    }
  }, [props.location.search])
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
        <SmpNav>
          <li>
            <Link to={'/about/'}>About</Link>
          </li>
        </SmpNav>
        <ArticleList
          pathname={props.location.pathname}
          onLinkClick={() => {
            // dispatch(navActionCreators.close())
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
          className={isOpen ? 'isOpen' : ''}
          onClick={(e) => {
            e.preventDefault()
            if (isOpen) {
              navigate('./')
              dispatch(navActionCreators.close())
            } else {
              navigate('?open')
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
