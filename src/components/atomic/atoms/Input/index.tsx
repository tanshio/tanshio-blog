import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  background-color: #ccc;
`

export type InputProps = {
  isLoading: boolean
  isSubmitted: boolean
  onEnter: () => void
  onLeave: () => void
  onClick: () => void
}

export const Input = (props: InputProps) => {
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

  return <InputWrapper onClick={handleClick}>input</InputWrapper>
}

export default memo(Input)
