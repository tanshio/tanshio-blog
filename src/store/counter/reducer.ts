import { CounterActionTypes, CounterState, INCREMENT_COUNT } from "./types"

const initialState: CounterState = {
  count: 0,
}

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case INCREMENT_COUNT: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}
