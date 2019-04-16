import { Dispatch } from 'redux'

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

export enum actionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET'
}

type TAction = {
    type: actionTypes;
}

// ACTIONS
export const incrementCount = () => (dispatch: Dispatch<TAction>) => {
  return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => (dispatch: Dispatch<TAction>) => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => (dispatch: Dispatch<TAction>) => {
  return dispatch({ type: actionTypes.RESET })
}

// REDUCER
export const reducer = (state = initialState, action: TAction) => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        return Object.assign({}, state, {
          count: state.count + 1
        })
      case actionTypes.DECREMENT:
        return Object.assign({}, state, {
          count: state.count - 1
        })
      case actionTypes.RESET:
        return Object.assign({}, state, {
          count: initialState.count
        })
      default:
        return state
    }
}