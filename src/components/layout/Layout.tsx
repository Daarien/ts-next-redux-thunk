import * as React from 'react'
import styled from 'styled-components'
import Header from './Header'

export const StyledLayout = styled.div`
  width: 100%;
  padding: 0;

  main {
    max-width: 1200px;
    margin: 30px auto;
  }

  footer {
    section {
      display: flex;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;

      span {
        margin: 0 auto;
      }
    }
  }
`;

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <StyledLayout>
    <Header title={title} />
    <main>
      {children}
    </main>
    <footer>
      <hr />
      <section>
        <span>Footer</span>
      </section>
    </footer>
  </StyledLayout>
)

export default Layout
