import * as React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Table } from 'react-bootstrap'
import Layout from 'components/layout/Layout'
import { TShow } from 'interfaces'
import styled from 'styled-components';


interface Props {
  shows: TShow[];
}

class Shops extends React.Component<Props> {

  static defaultProps = {
    shows: []
  }

  static getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    console.log("TCL: Shops -> res", res)
    if (res.status !== 200)
      return {
        shows: []
      }
    const data: Record<string, string>[] = await res.json()
    console.log("TCL: Shops -> data", data)

    return {
      shows: data.map(entry => entry.show)
    }
  }

  render() {
    const { shows } = this.props;

    return (
      <Layout title="Batman show list">
        {/* <hr /> */}
        <Table bordered hover>
          <TableHeader>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </TableHeader>
          <tbody>
            {shows.map(show => (
              <Link href={`/show/${show.id}`} key={show.id}>
                <tr style={{ cursor: 'pointer' }}>
                  <td>{show.id}</td>
                  <td>{show.name}</td>
                  <td>{show.status}</td>
                </tr>
              </Link>
            ))}
          </tbody>
        </Table>
      </Layout>
    )
  }
}

const TableHeader = styled('thead')`
  background-color: #eee;
`


export default Shops;