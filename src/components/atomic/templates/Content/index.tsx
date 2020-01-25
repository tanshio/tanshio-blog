import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 0;
    &:first-child {
      margin-top: 0;
    }
  }

  hr {
    margin-top: var(--spaceLg);
  }

  a {
    color: var(--colorPrimary);
    text-decoration: underline;
    text-decoration-color: var(--colorTextDecoration);
    word-break: break-all;
    &:hover {
      background-color: var(--colorTextDecoration);
      color: var(--colorTextSelection);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  li {
    font-size: var(--fontSize);
    line-height: var(--lineHeight);
    text-align: justify;
    &:before,
    &:after {
      content: '';
      display: block;
    }
    &:before,
    &:after {
      content: '';
      display: block;
      height: 0;
    }
    &:before {
      margin-top: calc((var(--lineHeight) - var(--fontSize)) * -0.5);
    }
    &:after {
      margin-bottom: calc((var(--lineHeight) - var(--fontSize)) * -0.5);
    }
  }

  p,
  ul,
  ol {
    & + p,
    & + ul,
    & + ol {
      margin-top: var(--spaceMd);
    }
  }

  ul,
  ol {
    ul,
    ol {
      margin-top: var(--spaceSm);
    }
  }

  li {
    --fontSize: var(--fontSizePrimary);
    --lineHeight: var(--lineHeightParagraph);
    & + li {
      margin-top: var(--spaceXs);
    }

    p {
      margin-bottom: 0;
    }

    ul,
    ol {
      margin-top: var(--spaceXs);
    }
  }

  p {
    --fontSize: var(--fontSizePrimary);
    --lineHeight: var(--lineHeightParagraph);
    margin-top: var(--spaceMd);
    margin-bottom: 0;
  }

  h2 {
    --fontSize: var(--fontSizeHeading2);
    --lineHeight: var(--lineHeightHeading2);
  }

  h3 {
    --fontSize: var(--fontSizeHeading3);
    --lineHeight: var(--lineHeightHeading2);
  }

  h4,
  h5 {
    --fontSize: var(--fontSizeHeadinOther);
    --lineHeight: var(--lineHeightHeading2);
  }

  h2,
  h3,
  h4,
  h5 {
    margin-top: var(--spaceXl);
    margin-bottom: 0;
    line-height: var(--lineHeightHeading2);

    & + h2,
    & + h3,
    & + h4,
    & + h5 {
      margin-top: var(--spaceSm);
    }

    & + p .gatsby-resp-image-wrapper {
      margin-top: var(--spaceMd);
    }
  }

  .anchor {
    svg {
      fill: var(--colorTextPrimary);
    }
    &:hover {
      background-color: transparent;
    }
  }

  .gatsby-resp-iframe-wrapper {
    margin-top: var(--spaceLg);
  }

  @media (min-width: 900px) {
    .gatsby-resp-iframe-wrapper {
      height: auto !important;
      padding-bottom: 0 !important;
      width: auto !important;
      iframe {
        position: static !important;
        width: 800px !important;
        height: 450px !important;
      }
    }
  }

  .gatsby-code-title {
    margin-top: var(--spaceLg);
    margin-right: auto;
    margin-bottom: 0;
    & + .gatsby-highlight {
      margin-top: 0;
    }
  }

  .gatsby-highlight {
    margin-top: var(--spaceMd);
  }

  .gatsby-resp-image-wrapper {
    margin-top: var(--spaceSm);
  }
`

export default memo(Content)
