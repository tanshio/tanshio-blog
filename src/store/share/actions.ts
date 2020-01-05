import { ActionType } from '../types'
import { ShareState } from './reducers'

export const SHARE_SUCCESS = 'SHARE_SUCCESS'

const success = () =>
  ({
    type: SHARE_SUCCESS,
  } as const)

export const shareActionCreators = {
  success,
}

export type ShareActionTypes = ActionType<typeof shareActionCreators>
