---
to: src/components/atomic/<%= Directory %>/<%= h.inflection.camelize(Name) %>/index.tsx
---
<%
 UpperCamelCase = h.inflection.camelize(Name)
 LowerCamelCase = h.inflection.camelize(Name, true)
%>import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

const <%= UpperCamelCase %>Wrapper = styled.div`
  background-color: #ccc;
`

export type <%= UpperCamelCase %>Props = {
  isLoading: boolean
  isSubmitted: boolean
  onEnter: () => void
  onLeave: () => void
  onClick: () => void
}

export const <%= UpperCamelCase %> = (props: <%= UpperCamelCase %>Props) => {
  const [isMounted, setIsMounted] = useState(true)
  const [isLoading, setIsLoading] = useState(props.isLoading)

  useEffect(() => {
    props.onEnter()
    return () => {
      setIsMounted(false)
      props.onLeave()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setIsLoading(props.isLoading)
  }, [props.isLoading])

  const handleClick = useCallback(() => {
    props.onClick()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <<%= UpperCamelCase %>Wrapper onClick={handleClick}><%= LowerCamelCase %></<%= UpperCamelCase %>Wrapper>
}

export default memo(<%= UpperCamelCase %>)
