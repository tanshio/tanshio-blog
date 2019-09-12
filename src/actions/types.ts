import { AnyAction } from 'redux'
import * as actions from './actions'

export type ActionsType<ActionCreators extends object> = {
  [Key in keyof ActionCreators]: ActionCreators[Key] extends (
    ...args: any[]
    ) => AnyAction
    ? ReturnType<ActionCreators[Key]>
    : never
}

export type ActionType<
  ActionCreators extends object,
  Actions = ActionsType<ActionCreators>
  > = { [Key in keyof Actions]: Actions[Key] }[keyof Actions]

export type Action = ActionType<typeof actions>
