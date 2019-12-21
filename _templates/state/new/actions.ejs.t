---
to: src/store/<%= h.inflection.camelize(Name, true) %>/actions.ts
---
<%
 LowerCase = Name.toLowerCase()
 UpperCase = Name.toUpperCase()
 LowerCamelCase = h.inflection.camelize(Name, true)
 UpperCamelCase = h.inflection.camelize(Name)
%>import { ActionType } from '../types'
import { <%= UpperCamelCase %>State } from './reducers'

export const <%= UpperCase %>_INIT = 'INIT'
export const <%= UpperCase %>_LOAD_REQUEST = '<%= UpperCase %>_LOAD_REQUEST'
export const <%= UpperCase %>_LOAD_SUCCESS = '<%= UpperCase %>_LOAD_SUCCESS'
export const <%= UpperCase %>_LOAD_FAIL = '<%= UpperCase %>_LOAD_FAIL'
export const <%= UpperCase %>_LOAD_404 = '<%= UpperCase %>_LOAD_404'

const init = () =>
  ({
    type: <%= UpperCase %>_INIT,
  } as const)

const loadRequest = () =>
  ({
    type: <%= UpperCase %>_LOAD_REQUEST,
  } as const)

const loadSuccess = (payload: <%= UpperCamelCase %>State['<%= LowerCamelCase %>']) =>
  ({
    type: <%= UpperCase %>_LOAD_SUCCESS,
    payload,
  } as const)

const loadFail = () =>
  ({
    type: <%= UpperCase %>_LOAD_FAIL,
  } as const)

const load404 = () =>
  ({
    type: <%= UpperCase %>_LOAD_404,
  } as const)

export const <%= LowerCamelCase %>ActionCreators = {
  init,
  loadRequest,
  loadSuccess,
  loadFail,
  load404,
}

export type <%= UpperCamelCase %>ActionTypes = ActionType<typeof <%= LowerCamelCase %>ActionCreators>
