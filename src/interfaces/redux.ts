import {NextAppContext} from 'next/app'
import { NextContext } from 'next'
import {Store} from 'redux'
import {TState} from 'store'

export type TReduxStore = Store<TState>;

export interface IAppContext extends NextAppContext {
  ctx: IContext;
}

export interface IContext extends NextContext {
  reduxStore: TReduxStore;
}

export interface IAppProps {
  initialReduxState: TState;
}