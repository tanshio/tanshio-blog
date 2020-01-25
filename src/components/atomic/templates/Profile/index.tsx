import React, { memo } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { mq } from '../../../../styles/vars/mq'
import { Content } from '../Content'

const ProfileDetail = styled.div`
  margin-top: var(--spaceMd);
  @media (${mq.xs}) {
    margin-top: 0;
    padding-left: var(--spaceMd);
    flex: 1;
  }
`

const ProfileThinText = styled.p``

export const ProfileWrapper = styled.aside`
  position: relative;
  margin-top: var(--spaceXl);
  padding-top: var(--headerHeight);
  @media (${mq.xs}) {
    display: flex;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100vw;
    height: 2px;
    background-color: var(--colorTextPrimary);
    top: 0;
    left: calc(var(--spaceSm) * -1);
    @media (${mq.sm}) {
      left: calc((var(--sidebarWidth) + var(--spaceLg)) * -1);
    }
    @media (${mq.lg}) {
      left: calc(
        (var(--sidebarWidth) + var(--titleWidth) + var(--spaceLg)) * -1
      );
    }
  }

  ${ProfileDetail} {
    h2 {
      --fontSize: var(--fontSizePrimary);
      --lineHeight: var(--lineHeightParagraph);
      margin-top: var(--spaceMd);
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      @media (${mq.xs}) {
        text-align: left;
        margin-top: 0;
      }

      & + p {
        margin-top: var(--spaceMd);
      }
    }

    p,
    ul {
      --fontSize: var(--fontSizeSm1);
      --lineHeight: var(--lineHeightParagraphSm);
      margin-top: var(--spaceMd);
      margin-bottom: 0;
    }

    p.small {
      text-align: right;
      --fontSize: var(--fontSizeSm2);
    }

    small {
      font-size: inherit;
    }

    ${ProfileThinText} {
      --fontSize: var(--fontSizeSm2);
      --lineHeight: var(--lineHeightParagraphXs);
    }

    ul {
      display: flex;
      padding: 0;
      list-style-type: none;
      li {
        margin-right: var(--spaceXs);
        margin-top: 0;
        font-size: var(--fontSizeSm1);
      }
    }
  }
`

const ProfileImgArea = styled.div`
  width: 90px;
  position: relative;
  align-self: flex-start;
  margin: 0 auto;
  @media (${mq.xs}) {
    margin: 0;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    top: -2px;
    left: -2px;
    border-radius: 100%;
  }
  .gatsby-image-wrapper {
    overflow: hidden;
    border-radius: 100%;
    border: 2px solid var(--colorTextPrimary);
    img {
      filter: grayscale(100%);
    }
  }
`

const ProfileImg = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
              fluid(
                maxWidth: 650
                traceSVG: { background: "#ece8e8", color: "#b35662" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={(data) => (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
  )
}

export const Profile = () => {
  return (
    <ProfileWrapper>
      <ProfileImgArea>
        <ProfileImg />
      </ProfileImgArea>
      <ProfileDetail>
        <Content>
          <h2>たんしお / Shota Tanno</h2>
          <p>
            宮城県在住。1987年生まれ。小学生の頃からサイトやウェブアプリを作り続け、サイトデザイン・作成・広告運用まですべてやるタイプでやっていましたが、自分の技術力のなさにショックを受けたので今はフロントエンド・アプリケーションエンジニアとしての仕事を主に行い生活しています。
          </p>
          <ProfileThinText>
            WebGL / React / Vue / TypeScript / Swift
            <br />
            Figma / Sketch
            <br />
            Adwords / Analytics
            <br />
            AWS
          </ProfileThinText>

          <ul>
            <li>
              <a
                href={'https://twitter.com/_tanshio'}
                target={'_blank'}
                rel={'noopener'}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href={'https://github.com/tanshio'}
                target={'_blank'}
                rel={'noopener'}
              >
                GitHub
              </a>
            </li>
          </ul>
          <p className={'small'}>
            <small>© 2020 tanshio.net</small>
          </p>
        </Content>
      </ProfileDetail>
    </ProfileWrapper>
  )
}

export default memo(Profile)
