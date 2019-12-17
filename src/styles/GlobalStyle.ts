import { normalize } from "styled-normalize"
import { createGlobalStyle } from "styled-components"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import { PrismStyles } from "./Prism"
import { colors, palette } from "./vars/colors"
export const GlobalStyles = createGlobalStyle`
  ${normalize}
  // base.css
  html{
    font-size: 1rem;
    text-underline-position: under;
  }
  body {
    margin: 0;
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: 'YakuHanJP','Public Sans','Noto Sans JP', "Hiragino Sans", "Hiragino Kaku Gothic ProN",Meiryo,sans-serif;
    background-color: ${palette.default.background};
    -webkit-font-smoothing: antialiased;
  }
  
  ::selection {
    background-color: ${palette.bg.dark};
    color: #fff;
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
