import { combineReducers } from "redux"
import { counter } from "./counter/reducers"
// Do not DELETE hygen import

export const reducers = {
  counter,
} // Do not DELETE hygen reducer

export const rootReducers = combineReducers({ ...reducers })

export default rootReducers
