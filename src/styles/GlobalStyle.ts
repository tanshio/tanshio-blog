import { normalize } from 'styled-normalize'
import { createGlobalStyle, css } from 'styled-components'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import { PrismStyles } from './Prism'
import { colors, palette } from './vars/colors'
import { fontSizes } from './vars/fontSizes'

const DarkStyle = css`
  --colorBg: #1a1a1a;
  --colorTextPrimary: #fff;
  --shareIconStrokeWidth: 2px;
  --shareIconStrokeColor: var(--colorTextPrimary);
  --colorIconFb: transparent;
  --colorIconTw: transparent;
  --colorIconLine: transparent;
  --colorIconPocket: transparent;
  --modeButtonOpacity: 0.5;
  --modeButtonCircleBorder: 2px solid var(--colorBg);
  --modeButtonCircleMoonOpacity: 0;
  --modeButtonCircleSunOpacity: 1;
`

const LightStyle = css`
  --colorBg: #e8e8e8;
  --colorTextPrimary: #1a1a1a;
  --shareIconStrokeWidth: 0;
  --shareIconStrokeColor: transparent;
  --colorIconFb: #3b5998;
  --colorIconTw: #00aced;
  --colorIconLine: #00b800;
  --colorIconPocket: #ef3f56;
  --modeButtonOpacity: 1;
  --modeButtonCircleBorder: 0;
  --modeButtonCircleMoonOpacity: 1;
  --modeButtonCircleSunOpacity: 0;
`

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
    
    --colorIconFb: #3b5998;  
    --colorIconTw: #00aced;  
    --colorIconLine: #00b800;  
    --colorIconPocket: #EF3F56;
    
    --shareIconStrokeWidth: 0;

    --modeButtonOpacity: 1;
    --modeButtonCircleBorder: 0;
    --modeButtonCircleMoonOpacity: 1;
    --modeButtonCircleSubOpacity: 0;
  
    @media (prefers-color-scheme: dark) {
      ${DarkStyle}
    }
    
    --headerHeight: 4rem;
    
    --spaceRhythm: 0.5rem;
    --spaceUnit: var(--spaceRhythm);
    --spaceXs1: calc(var(--spaceUnit) * 0.5);
    --spaceXs: var(--spaceUnit);
    --spacePrimary: var(--spaceUnit);
    --spaceSm: calc(var(--spaceUnit) * 2);
    --spaceMd: calc(var(--spaceUnit) * 3);
    --spaceLg: calc(var(--spaceUnit) * 5);
    --spaceXl: calc(var(--spaceUnit) * 8);
    --spaceXl2: calc(var(--spaceUnit) * 13);
    
    // https://standard.shiftbrain.com/blog/music-math-typography
    //--fontSizeRoot: 16px;
    --fontSizeRhythm: 8;
    --fontSizeUnit: 1rem;
    --fontSizeSm3: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 11);
    --fontSizeSm2: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 10);
    --fontSizeSm1: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 9);
    --fontSizePrimary: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 8);
    --fontSizeMd: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 7);
    --fontSizeLg: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 6);
    --fontSizeXl: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 5);
    
    --fontSizeHeadingOther: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 6);
    --fontSizeHeading3: var(--fontSizeMd);
    --fontSizeHeading2: var(--fontSizeXl);
    --fontSizeHeading1: calc(var(--fontSizeUnit) * var(--fontSizeRhythm) / 4);
    
    --lineHeightUnit: 4px;
    --lineHeightPrimary: calc(var(--lineHeightUnit) * 4);
    --lineHeightParagraph: calc(var(--lineHeightUnit) * 7);
    --lineHeightHeading1: calc(var(--lineHeightUnit) * 11);
    --lineHeightHeading2: calc(var(--lineHeightUnit) * 8);
    
  }
  
  
  ${normalize}
  // base.css
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html{
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
    color: var(--colorTextPrimary);
    &.is-dark {
      ${DarkStyle}
    }
    &.is-light {
      ${LightStyle}
    }
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
