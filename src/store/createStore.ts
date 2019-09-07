
import { createStore as reduxCreateStore } from "redux"

interface postState {
  count: 0
}

const reducer = (state: postState, action: any) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const initialState: postState = { count: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
