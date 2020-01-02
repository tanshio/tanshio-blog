import { combineReducers } from 'redux'
import { counter } from './counter/reducers'
import { nav } from './nav/reducers'
// Do not DELETE hygen import

export const reducers = {
  counter,
  nav,
} // Do not DELETE hygen reducer

export const rootReducers = combineReducers({ ...reducers })

export default rootReducers
