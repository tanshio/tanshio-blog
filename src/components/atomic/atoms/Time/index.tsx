import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { DateISO8601 } from '../../../../types'

export const TimeWrapper = styled.time`
  display: block;
  line-height: 1;
`

export type TimeProps = {
  date: DateISO8601
}

export const Time = (props: TimeProps) => {
  const date = useMemo(() => {
    return new Date(props.date)
  }, [props.date])

  const zeroPad = (num: number) => {
    return String(num).padStart(2, '0')
  }

  return (
    <TimeWrapper
      dateTime={`${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`}
    >{`${date.getFullYear()}.${zeroPad(date.getMonth() + 1)}.${zeroPad(
      date.getDate()
    )}`}</TimeWrapper>
  )
}

export default memo(Time)
