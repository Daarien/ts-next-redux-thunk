import React from 'react'
import { initializeStore, TState } from '.'
import {TReduxStore, IAppProps, IAppContext} from 'interfaces/redux'

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: TReduxStore;
  }
}

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore (initialState?: TState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

// React.ComponentClass<IContext>

export default (App: any) => {
  return class AppWithRedux extends React.Component<IAppProps> {
    // constructor (props: IAppProps) {
    //   super(props)
    //   this.reduxStore = getOrCreateStore(props.initialReduxState)
    // }
    reduxStore = getOrCreateStore(this.props.initialReduxState)

    static async getInitialProps (appContext: IAppContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore()

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore

      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    render () {
      return React.createElement(App, {...this.props, reduxStore: this.reduxStore})
    }
  }
}
