import produce from 'immer'
import { CounterActionTypes } from './actions'
import { COUNT_DECREMENT, COUNT_INCREMENT } from './actions'

export type CounterState = {
  count: number
}

export const counter = produce(
  (
    draft: CounterState = { count: 0 },
    action: CounterActionTypes
  ): CounterState => {
    switch (action.type) {
      case COUNT_INCREMENT:
        draft.count = draft.count + action.payload
        return draft
      case COUNT_DECREMENT:
        draft.count = draft.count - action.payload
        return draft
      default:
        return draft
    }
  }
)
