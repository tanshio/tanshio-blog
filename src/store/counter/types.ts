export type CounterState = {
  count: number
}

export const INCREMENT_COUNT = 'INCREMENT_COUNT'

type IncrementCountAction = {
  type: typeof INCREMENT_COUNT
  payload: CounterState['count']
}

export type CounterActionTypes = IncrementCountAction
