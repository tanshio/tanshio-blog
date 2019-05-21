import { normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { PrismStyles } from "./Prism"
export const GlobalStyles = createGlobalStyle`
  ${normalize}
  // base.css
  html{
    font-size: 1rem;
  }
  body {
    margin: 0;
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }
  a {
    cursor: pointer;

    &:link,
    &:visited {
      text-decoration: none;
    }

    &:hover {
      opacity: .9;
      text-decoration: underline;
    }
  }
  
  ${PrismStyles}
`
