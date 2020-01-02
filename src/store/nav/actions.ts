import { ActionType } from '../types'

export const NAV_OPEN = 'NAV_OPEN'
export const NAV_CLOSE = 'NAV_CLOSE'

const open = () =>
  ({
    type: NAV_OPEN,
  } as const)

const close = () =>
  ({
    type: NAV_CLOSE,
  } as const)

export const navActionCreators = {
  open,
  close,
}

export type NavActionTypes = ActionType<typeof navActionCreators>
