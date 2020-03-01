/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLockBodyScroll, useToggle } from 'react-use'

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
import { ModeChangeButton } from './atomic/atoms/ModeChangeButton'
import { searchActionCreators } from '../store/search/actions'

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
  background-color: var(--colorBg);
  visibility: ${(props) =>
    props.isOpen || isClearedSidebarPages(props.pathname)
      ? 'visible'
      : 'hidden'};
  z-index: 1;
  @media (${mq.sm}) {
    width: 300px;
    visibility: visible;
    border-right: 2px solid var(--colorTextPrimary);
  }
`

type MenuButtonType = {
  pathname: string
  isOpen: boolean
}

const MenuButton = styled.button<MenuButtonType>`
  position: fixed;
  appearance: none;
  padding: 0 var(--spaceSm);
  height: var(--headerHeight);
  width: var(--spaceXl);
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
    padding: 1rem var(--spaceSm);
    font-size: var(--fontSizeSm);
    line-height: 1;
    @media (${mq.md}) {
      padding: 1rem;
    }
  }

  @media (${mq.sm}) {
    display: none;
  }
`

const ArticleFilterInput = styled.input`
  background-color: var(--colorBg);
  appearance: none;
  border: 0;
  width: 100%;
  line-height: normal;
  padding: 1rem var(--spaceSm);
  border-bottom: 2px solid var(--colorTextPrimary);
  font-size: var(--fontSizeSm2);
  color: var(--colorTextPrimary);
  border-radius: 0;
  @media (${mq.sm}) {
    padding: var(--spaceSm);
  }
`

const StickyBlock = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--colorBg);
`

const isOpenSelector = (state: State) => state.nav.isOpen
const searchText = (state: State) => state.search.search

const Layout = (props: LayoutProps) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(isOpenSelector)
  const search = useSelector(searchText)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const [filterText, setFilterText] = useState(search)
  const [locked, toggleLocked] = useToggle(false)
  useLockBodyScroll(locked)

  let websiteTheme: string = ''
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setFilterText(search)
  }, [search])

  useEffect(() => {
    setTheme(window.__theme)
    console.log(window.__theme)
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
      toggleLocked(true)
    }

    if (!/open/.test(props.location.search) && isOpen) {
      dispatch(navActionCreators.close())
      toggleLocked(false)
    }
  }, [props.location.search])
  return (
    <>
      <GlobalStyles />
      <ModeChangeButton
        onClick={themeToggle}
      />
      <Sidebar
        tabIndex={0}
        pathname={props.location.pathname}
        aria-label={`change color mode ${theme}`}
        isOpen={isOpen}
        ref={menuRef}
      >
        <StickyBlock>
          <Header />
          <SmpNav>
            <li>
              <Link to={'/about/'}>About</Link>
            </li>
          </SmpNav>
          <ArticleFilterInput
            type="search"
            value={filterText}
            placeholder={'Search...'}
            onChange={(e) => {
              setFilterText(e.target.value)
              dispatch(searchActionCreators.search(e.target.value))
            }}
          />
        </StickyBlock>
        <ArticleList
          pathname={props.location.pathname}
          filterText={filterText}
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
