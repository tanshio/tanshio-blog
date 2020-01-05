import produce from 'immer'
import { SHARE_SUCCESS, ShareActionTypes } from './actions'

export type ShareState = {
  hasShare: boolean
}

const initialValue = {
  hasShare: false,
}

export const share = produce(
  (draft: ShareState = initialValue, action: ShareActionTypes): ShareState => {
    switch (action.type) {
      case SHARE_SUCCESS:
        draft.hasShare = true
        return draft
      default:
        return draft
    }
  }
)
