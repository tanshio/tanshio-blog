import { ActionType } from '../types'
import { CounterState } from './reducers'

export const COUNT_INCREMENT = 'COUNT_INCREMENT'
export const COUNT_DECREMENT = 'COUNT_DECREMENT'

const increment = (payload: CounterState['count']) =>
  ({
    type: COUNT_INCREMENT,
    payload,
  } as const)

const decrement = (payload: CounterState['count']) =>
  ({
    type: COUNT_DECREMENT,
    payload,
  } as const)

export const counterActionCreators = {
  increment,
  decrement,
}

export type CounterActionTypes = ActionType<typeof counterActionCreators>
