import { combineReducers } from 'redux'
import { nav } from './nav/reducers'
import { share } from './share/reducers'
import { search } from './search/reducers'
// Do not DELETE hygen import

export const reducers = {
  nav,
  share,
  search,
} // Do not DELETE hygen reducer

export const rootReducers = combineReducers({ ...reducers })

export default rootReducers
