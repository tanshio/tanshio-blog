import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  background-color: #ccc;
  cursor: pointer;
`

export type ButtonProps = {
  isLoading: boolean
  isSubmitted: boolean
  onEnter: () => void
  onLeave: () => void
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
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

  return <ButtonWrapper onClick={handleClick}>button</ButtonWrapper>
}

export default memo(Button)
