import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { DateISO8601 } from '../../../../types'

export const TimeWrapper = styled.time``

export type TimeProps = {
  date: DateISO8601
}

export const Time = (props: TimeProps) => {
  const date = useMemo(() => {
    return new Date(props.date)
  }, [props.date])
  return (
    <TimeWrapper
      dateTime={`${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`}
    >{`${date.getFullYear()}.${('0' + String(date.getMonth() + 1)).slice(
      -2
    )}.${('0' + String(date.getDate())).slice(-2)}`}</TimeWrapper>
  )
}

export default memo(Time)
