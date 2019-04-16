import { createStore, combineReducers, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export type TState = {
    lastUpdate: number;
    light: boolean;
    count: number;
}

const initialState: TState = {
  lastUpdate: 0,
  light: false,
  count: 0
}

const reducers = {

}

export function initializeStore (state = initialState): Store<TState> {
  return createStore(
    combineReducers(reducers),
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}