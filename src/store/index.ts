import { applyMiddleware, compose, createStore } from "redux"
import rootReducers, { reducers } from "./root"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export type State = {
  [K in keyof typeof reducers]: ReturnType<typeof reducers[K]>
}

console.log(process.env.NODE_ENV, "env")

export const initStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancer = composeEnhancers(applyMiddleware())

  return createStore(
    rootReducers,
    {
      // counter: {
      //   count: 1,
      // },
      // todos: { todos: [{ title: 'test' }, { title: 'test2' }] },
    },
    enhancer
  )
}

export default initStore
