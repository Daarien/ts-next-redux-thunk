import React from 'react'
import { connect } from 'react-redux'
import { clockDispatcher } from 'store'
import {IContext} from 'interfaces/redux'
import Examples from 'components/examples'

interface IProps {
  serverRenderClock: (isServer: boolean) => {};
  startClock: () => any;
}

class Clock extends React.Component<IProps> {
  static getInitialProps ({ reduxStore, req }: IContext) {
    const isServer = !!req
    reduxStore.dispatch(this.props.serverRenderClock(isServer))

    return {}
  }

  timer = 0;

  componentDidMount () {
    // const { dispatch } = this.props
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return React.createElement(Examples)
  }
}

export default connect(null, clockDispatcher)(Clock)
