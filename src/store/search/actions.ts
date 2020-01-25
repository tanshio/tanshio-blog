import { ActionType } from '../types'
import { SearchState } from './reducers'

export const SEARCH_TEXT = 'SEARCH_TEXT'

const search = (payload: SearchState['search']) =>
  ({
    type: SEARCH_TEXT,
    payload,
  } as const)

export const searchActionCreators = {
  search,
}

export type SearchActionTypes = ActionType<typeof searchActionCreators>
