import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: var(--default-gap);
  width: 100%;
  height: 100vh;

  p {
    font-size: 64px;
    font-weight: var(--font-weight-bold);
    color: var(--default-color-text);
  }
`

export const ErrorLayout = ({ children, title = 'Error' }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="primar project description" />
        <title>{title}</title>
      </Head>

      <Main>{children}</Main>
    </React.Fragment>
  )
}

export default ErrorLayout
