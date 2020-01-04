import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { PrismStyles } from './Prism'
import { colors, palette } from './vars/colors'
import { fontSizes } from './vars/fontSizes'
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Original Yu Gothic";
    src: local("Yu Gothic Medium");
    font-weight: 100;
  }
  @font-face {
    font-family: "Original Yu Gothic";
    src: local("Yu Gothic Medium");
    font-weight: 200;
  }
  @font-face {
    font-family: "Original Yu Gothic";
    src: local("Yu Gothic Medium");
    font-weight: 300;
  }
  @font-face {
    font-family: "Original Yu Gothic";
    src: local("Yu Gothic Medium");
    font-weight: 400;
  }
  @font-face {
    font-family: "Original Yu Gothic";
    src: local("Yu Gothic Bold");
    font-weight: bold;
  }

  // var
 
  :root {
    --fontFamilyBase: 'YakuHanJP','Public Sans','Original Yu Gothic', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif;
    
    --colorBg: #e8e8e8;
    --colorBgDark: #b35662;
    --colorTextPrimary: #1a1a1a;
    --colorTextSelection: #fff;
    --colorTextReverse: #fff;
    --colorTextDecoration: #b35662;
    @media (prefers-color-scheme: dark) {
      --colorBg: #1a1a1a;
      --colorTextPrimary: #fff;
    }
    
    --rhythm: 8;
    --spaceUnit: calc(var(--rhythm) * 1px);
    --spaceXs: var(--spaceUnit);
    --spaceSm: calc(var(--spaceUnit) * 2);
    --spaceMd: calc(var(--spaceUnit) * 3);
    --spaceLg: calc(var(--spaceUnit) * 4);
    --spaceXl: calc(var(--spaceUnit) * 5);
    
    // https://standard.shiftbrain.com/blog/music-math-typography
    --fontSizeRoot: 16px;
    --fontSizeUnit: 1rem;
    --fontSizeSm3: calc(var(--fontSizeUnit) * var(--rhythm) / 11);
    --fontSizeSm2: calc(var(--fontSizeUnit) * var(--rhythm) / 10);
    --fontSizeSm1: calc(var(--fontSizeUnit) * var(--rhythm) / 9);
    --fontSizePrimary: calc(var(--fontSizeUnit) * var(--rhythm) / 8);
    --fontSizeMd: calc(var(--fontSizeUnit) * var(--rhythm) / 7);
    --fontSizeLg: calc(var(--fontSizeUnit) * var(--rhythm) / 6);
    --fontSizeXl: calc(var(--fontSizeUnit) * var(--rhythm) / 5);
    
    --fontSizeHeadingOther: calc(var(--fontSizeUnit) * var(--rhythm) / 6);
    --fontSizeHeading3: var(--fontSizeMd);
    --fontSizeHeading2: var(--fontSizeXl);
    --fontSizeHeading1: calc(var(--fontSizeUnit) * var(--rhythm) / 4);
    
  }
  
  
  ${normalize}
  // base.css
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html{
    font-size: var(--fontSizeRoot);
    text-underline-position: under;
    //scroll-behavior: smooth;
  }
  body {
    margin: 0;
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    font-family: var(--fontFamilyBase);
    background-color: var(--colorBg);
    -webkit-font-smoothing: antialiased;
    color: var(--colorTextPrimary);
  }
  
  ::selection {
    background-color: var(--colorBgDark);
    color: var(--colorTextSelection);
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-feature-settings: "palt";
    letter-spacing: 0.025em;
  }
  
  a {
  display: inline-block;
  //  cursor: pointer;
  //
  //  &:link,
  //  &:visited {
  //    text-decoration: none;
  //  }
  //
  }
  
  .gatsby-resp-image-wrapper {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  ${PrismStyles}
`
