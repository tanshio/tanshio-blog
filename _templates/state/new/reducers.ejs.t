---
to: src/store/<%= h.inflection.camelize(Name, true) %>/reducers.ts
---
<%
 LowerCase = Name.toLowerCase()
 UpperCase = Name.toUpperCase()
 LowerCamelCase = h.inflection.camelize(Name, true)
 UpperCamelCase = h.inflection.camelize(Name)
%>import produce from 'immer'
import {
  <%= UpperCase %>_INIT,
  <%= UpperCase %>_LOAD_REQUEST,
  <%= UpperCase %>_LOAD_SUCCESS,
  <%= UpperCase %>_LOAD_FAIL,
  <%= UpperCase %>_LOAD_404,
  <%= UpperCamelCase %>ActionTypes,
} from './actions'

export type <%= UpperCamelCase %>State = {
  <%= LowerCamelCase %>: any
  isLoading: boolean
  isSubmitted: boolean
  is404: boolean
}

const initialValue = {
  <%= LowerCamelCase %>: [],
  is404: false,
  isLoading: true,
  isSubmitted: false,
}

export const <%= LowerCamelCase %> = produce(
  (
    draft: <%= UpperCamelCase %>State = initialValue,
    action: <%= UpperCamelCase %>ActionTypes
  ): <%= UpperCamelCase %>State => {
    switch (action.type) {
      case <%= UpperCase %>_INIT:
        draft.isLoading = true
        return draft
      case <%= UpperCase %>_LOAD_REQUEST:
        return draft
      case <%= UpperCase %>_LOAD_SUCCESS:
        draft.isLoading = false
        return draft
      case <%= UpperCase %>_LOAD_FAIL:
        return draft
      case <%= UpperCase %>_LOAD_404:
        draft.isLoading = false
        draft.is404 = true
        return draft
      default:
        return draft
    }
  }
)
