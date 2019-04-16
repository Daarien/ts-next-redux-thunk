import { NextFunctionComponent, NextContext } from 'next'
import { withRouter, WithRouterProps } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Layout from 'components/layout/Layout'
import Button from 'components/Button'
import { TShow } from 'interfaces'

interface Props extends WithRouterProps {
  show: TShow;
}

const Shop: NextFunctionComponent<Props> = props => (
  <Layout title="Batman show">
    <p>
      <Button onClick={() => props.router!.back()} className='d-flex align-items-center'>
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className='ml-2'>Back to list</span>
      </Button>
    </p>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
)

Shop.getInitialProps = async function (context: NextContext) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  return { show }
}

export default withRouter(Shop)