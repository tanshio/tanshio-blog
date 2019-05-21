import { css } from "styled-components"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
export const PrismStyles = css`
  .gatsby-code-title + .gatsby-highlight {
    border-radius: 0 0.3em 0.3em;
  }

  .gatsby-highlight {
    background-color: #2d2d2d;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight-code-line {
    background-color: #444;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #bf91c0;
  }

  .gatsby-highlight pre[class*="language-"] {
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  .gatsby-code-title {
    background: #b35662;
    color: #fff;
    margin-bottom: -0.65em;
    padding: 0.7rem 1.05rem;
    font-size: 0.8em;
    line-height: 1;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
      Courier New, monospace;
    font-weight: 600;
    border-radius: 8px 8px 0 0;
    display: table;
  }
`
