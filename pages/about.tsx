import * as React from 'react'
import Layout from 'components/layout/Layout'
import BackButton from 'components/BackButton'

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript">
    <p><BackButton to='/'>back to main</BackButton></p>
    <p>This is the about page</p>
  </Layout>
)

export default AboutPage;
