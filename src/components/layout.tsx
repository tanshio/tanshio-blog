/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"

import Header from "./Header"
import { ReactElement, ReactNode } from "react"
import { GlobalStyles } from "../styles/GlobalStyle"
import ArticleList from "./article-list"
import AppState from "../store"
import { Action, Dispatch } from "redux"
import styled from "styled-components"
import { colors, palette } from "../styles/vars/colors"
//
// const mapStateToProps = (state: AppState) => {
//   return state
// }
//
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return { increment: () => dispatch({ type: `INCREMENT` }) }
// }

// const Counter = ({ count, increment }) => {
//   console.log("counter")
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

interface LayoutProps {
  location?: {
    pathname: string
  }
  children: ReactNode
}

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  overflow: auto;
  border-right: 2px solid #1a1a1a;
  background-color: ${palette.default.background};
`

const Layout = (props: LayoutProps) => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Sidebar>
        <Header />
        <ArticleList pathname={props.location.pathname} />
      </Sidebar>
      {/*<p>This works {props.location.pathname}</p>*/}
      <div>
        <main>{props.children}</main>
      </div>
    </>
  )
}

export default Layout
