import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withReduxStore from 'store/with-redux-store'
import { GlobalStyles, projectTheme } from 'theme'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

interface IAppProps {
  reduxStore: any;
}

class RootApp extends App<IAppProps> {

  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <GlobalStyles />
          <ThemeProvider theme={projectTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(RootApp)