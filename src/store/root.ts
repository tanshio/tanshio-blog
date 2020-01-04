import { combineReducers } from 'redux'
import { nav } from './nav/reducers'
// Do not DELETE hygen import

export const reducers = {
  nav,
} // Do not DELETE hygen reducer

export const rootReducers = combineReducers({ ...reducers })

export default rootReducers
