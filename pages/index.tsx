import * as React from 'react'
import { NextFunctionComponent } from 'next'
import Link from 'next/link'
import Layout from 'components/layout/Layout'
import Button from 'components/Button'
import { Flex } from 'components/custom/Elements'

const Index: NextFunctionComponent<{}> = () => {
  return (
    <Layout title="Главная страница">
      <Flex justify='center' align='end'>
        <Link href='/shows'>
          <Button className='p-3'>Batman TV Shows</Button>
        </Link>
      </Flex>
    </Layout>
  )
}

export default Index