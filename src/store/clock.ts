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
    TICK = 'TICK'
}
  
  type TAction = {
    type: actionTypes;
    light: boolean;
    ts: number;
  }
  
// ACTIONS
export const dispatcher = {
serverRenderClock: (isServer: boolean) => (dispatch: Dispatch<TAction>) => {
    dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
},

startClock: () => (dispatch: Dispatch<TAction>) => {
    return setInterval(() => {
    dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
}
}

  // REDUCERS
export const reducer = (state = initialState, action: TAction) => {
    switch (action.type) {
      case actionTypes.TICK:
        return Object.assign({}, state, {
          lastUpdate: action.ts,
          light: !!action.light
        })

      default:
        return state
    }
}