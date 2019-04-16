import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import Logo from '../../../assets/img/batman-logo-64.svg'
import { Flex } from 'components/custom/Elements';

const StyledHeader = styled.header`
  width: 100%;
  color: #fff;
  background-color: ${({ theme }) => theme.activeColor};

  nav {
    margin: 0 auto;
    padding: 0;
    max-width: 1200px;
    display: flex;
    align-items: center;

    > a {
      margin: 0 10px;
    }
  }
`

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <StyledHeader>
      <nav className='d-flex justify-content-between'>
        <Flex align='center'>
          <Link href='/'><a><Logo /></a></Link>
          <h3 className='m-0 ml-5'>{title}</h3>
        </Flex>
        <Link href='/about'><a>About</a></Link>
      </nav>
    </StyledHeader>
  </>
}