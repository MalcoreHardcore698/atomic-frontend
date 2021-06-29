import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import DefaultLayout from './default'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 380px;
  justify-content: center;
  align-content: center;
  margin: 120px 0;

  @media only screen and (max-width: 480px) {
    grid-template-columns: 100%;
    margin: 25px 0;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: var(--default-gap);
  width: 100%;

  p {
    font-size: 64px;
    font-weight: var(--font-weight-bold);
    color: var(--default-color-text);
  }
`

export const ErrorLayout = ({ children, title = 'Error' }) => {
  return (
    <DefaultLayout>
      <Head>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="primar project description" />
        <title>{title}</title>
      </Head>

      <Wrap>
        <Main>{children}</Main>
      </Wrap>
    </DefaultLayout>
  )
}

export default ErrorLayout
