/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from './Header'
import { ReactNode, useEffect, useState } from 'react'
import { GlobalStyles } from '../styles/GlobalStyle'
import ArticleList from './ArticleList'
import { State } from '../store'
import styled from 'styled-components'
import { mq } from '../styles/vars/mq'
import { navActionCreators } from '../store/nav/actions'
import { useRef } from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { shareActionCreators } from '../store/share/actions'

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

type ModeChangeButtonType = {
  isDark?: boolean
}

const ModeChangeButton = styled.button<ModeChangeButtonType>`
  position: absolute;
  right: 0;
  top: 0;
  appearance: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border-radius: 0;
  border: 0;
  cursor: pointer;
  padding: 0;
  opacity: ${(props) => (props.isDark ? 0.5 : 1)};
  @media (${mq.sm}) {
    width: 3rem;
    height: 3rem;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    z-index: 1;
  }

  &::before {
    left: 50%;
    margin-left: -0.5rem;
    background-color: var(--colorTextPrimary);
    border: ${(props) => (props.isDark ? '2px solid var(--colorBg)' : 0)};
  }
  &:after {
    background-color: var(--colorBg);
    right: 10%;
    opacity: ${(props) => (props.isDark ? 0 : 1)};
    @media (${mq.sm}) {
      right: 22%
    }
  }

  span {
    position: absolute;
    width: 1.4rem;
    height: 2px;
    background-color: var(--colorTextPrimary);
    top: 50%;
    left: 50%;
    margin-top: -1px;
    margin-left: -0.7rem;
    opacity: ${(props) => (props.isDark ? 1 : 0)};
    &:nth-of-type(2) {
      transform: rotate(45deg);
    }
    &:nth-of-type(3) {
      transform: rotate(90deg);
    }
    &:nth-of-type(4) {
      transform: rotate(135deg);
    }
  }
`

const isOpenSelector = (state: State) => state.nav.isOpen

const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenSelector)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  let websiteTheme: string = ''
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const themeToggle = () => {
    window.__setPreferredTheme(websiteTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    let n = window.navigator as any
    if (n.share) {
      dispatch(shareActionCreators.success())
    }
    return () => {}
  }, [])

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
      <ModeChangeButton
        aria-label={'change color mode'}
        isDark={theme === 'dark'}
        onClick={(e) => {
          e.preventDefault()
          themeToggle()
        }}
      >
        <span role={'presentation'} />
        <span role={'presentation'} />
        <span role={'presentation'} />
        <span role={'presentation'} />
      </ModeChangeButton>
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
