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

const mapStateToProps = (state: AppState) => {
  return state
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const Counter = ({ count, increment }) => {
  console.log('counter')
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

interface LayoutProps {
  location?: {
    pathname: string
  }
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  return (
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
      render={data => {
        console.log(data, props)
        return (
          <>
            <GlobalStyles />
            <Header siteTitle={data.site.siteMetadata.title} />
            {/*<p>This works {props.location.pathname}</p>*/}
            <div
              className={props.location.pathname}
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <ArticleList location={props.location} />
              <ConnectedCounter />
              <main>{props.children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        )
      }}
    />
  )
}

export default Layout
