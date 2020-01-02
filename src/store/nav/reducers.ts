import produce from 'immer'
import { NAV_CLOSE, NAV_OPEN, NavActionTypes } from './actions'

export type NavState = {
  isOpen: boolean
}

export const nav = produce(
  (draft: NavState = { isOpen: false }, action: NavActionTypes): NavState => {
    switch (action.type) {
      case NAV_OPEN:
        draft.isOpen = true
        return draft
      case NAV_CLOSE:
        draft.isOpen = false
        return draft
      default:
        return draft
    }
  }
)
