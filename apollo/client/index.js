import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { ApolloLink, Observable } from 'apollo-link'
import { onError } from 'apollo-link-error'

import config from '../../config'

const SSR = typeof window === 'undefined'
const NODE_ENV = process.env.NODE_ENV !== 'production'
const SERVER_URL = NODE_ENV ? config.get('server-local-url') : config.get('server-host-url')
const SECRET = config.get('secret')

const request = async (operation) => {
  const token = !SSR && (await localStorage.getItem(SECRET))
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  })
}

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('[graphQLErrors]', graphQLErrors)
  }
  if (networkError) {
    console.log('[networkError]', networkError)
  }
})

export const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle

      Promise.resolve(operation)
        .then((result) => request(result))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const uploadLink = createUploadLink({
  uri: `${SERVER_URL}/graphql`,
  credentials: 'same-origin'
})

export default function createApolloClient() {
  return new ApolloClient({
    ssrMode: SSR,
    link: ApolloLink.from([errorLink, requestLink, uploadLink]),
    cache: new InMemoryCache(),
    defaultOptions
  })
}
