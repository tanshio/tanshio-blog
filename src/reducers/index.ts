import { combineReducers } from "redux"
import { Action } from "../actions/types"

type State = {
  count: number
}

const initialValue = {
  count: 0,
}

export const reducer = (state: State = initialValue, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload }
    case "decrement":
      return { count: state.count - action.payload }
    default:
      return state
  }
}

export const rootReducer = combineReducers(reducer)
