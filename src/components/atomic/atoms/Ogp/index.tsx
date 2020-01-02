import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import Mikan from 'mikanjs'

const OgpWrapper = styled.div`
  background: rgb(125, 100, 103);
  background: linear-gradient(
    135deg,
    rgba(125, 100, 103, 1) 0%,
    rgba(179, 86, 98, 1) 50%,
    rgba(168, 125, 130, 1) 100%
  );
  width: 1200px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem;
  line-height: 1.8;
  font-size: 2.5em;
  text-align: center;
  font-weight: bold;
  color: #fff;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border: 5px solid #fff;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`

const OgpInner = styled.div``

export type OgpProps = {
  title: string
}

export const Ogp = (props: OgpProps) => {
  return (
    <OgpWrapper>
      <OgpInner>
        <div
          dangerouslySetInnerHTML={{
            __html: Mikan(props.title),
          }}
        />
      </OgpInner>
    </OgpWrapper>
  )
}

export default memo(Ogp)
