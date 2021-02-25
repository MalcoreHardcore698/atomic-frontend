import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'
import NextNprogress from 'nextjs-progressbar'
import { motion } from 'framer-motion'

import '../atomic-ui/theme/default.css'
import theme from '../atomic-ui/theme'

import { useApollo, initializeApollo } from '../apollo'
import { useStore, initializeStore } from '../store'
import '../assets/styles/styles.css'

const App = ({ Component, pageProps }) => {
  const client = useApollo(pageProps.initialApolloState)
  const store = useStore(pageProps.initialReduxState)
  const router = useRouter()

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Head>
          <title>Атомик</title>
          <meta charSet={'utf-8'} />
          <meta
            name={'viewport'}
            content={'minimum-scale=1, initial-scale=1, width=device-width'}
          />
          <meta name={'theme-color'} content={'#000000'} />
          <meta
            name={'description'}
            content={'Атомик – портал для формирования новой сферы образования'}
          />
          <meta name={'yandex-verification'} content={'3e23950b3ed78bf4'} />
        </Head>

        <ThemeProvider theme={theme}>
          <motion.div
            key={router.route}
            initial={'pageInitial'}
            animate={'pageAnimate'}
            variants={{
              pageInitial: {
                opacity: 0
              },
              pageAnimate: {
                opacity: 1
              }
            }}>
            <Component {...pageProps} />
          </motion.div>

          <NextNprogress
            color={'var(--default-color-accent)'}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  )
}

export const getServerSideProps = async () => {
  const store = initializeStore()
  const client = initializeApollo()

  return {
    props: {
      initialReduxState: store.getState(),
      initialApolloState: client.cache.extract()
    },
    revalidate: 1
  }
}

export default App
