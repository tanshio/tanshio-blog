import produce from 'immer'
import { SEARCH_TEXT, SearchActionTypes } from './actions'

export type SearchState = {
  search: string
}

const initialValue = {
  search: '',
}

export const search = produce(
  (
    draft: SearchState = initialValue,
    action: SearchActionTypes
  ): SearchState => {
    switch (action.type) {
      case SEARCH_TEXT:
        draft.search = action.payload
        return draft
      default:
        return draft
    }
  }
)
