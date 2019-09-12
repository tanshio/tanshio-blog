import { CounterActionTypes, CounterState, INCREMENT_COUNT } from "./types"

export function incrementCount(count: number): CounterActionTypes {
  return {
    type: INCREMENT_COUNT,
    payload: count
  }
}
