import { useMemo } from 'react'
import merge from 'deepmerge'

import createApolloClient from './client'

let apolloClient

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    const data = merge(initialState, existingCache)

    _apolloClient.cache.restore(data)
  }

  if (typeof window === 'undefined') return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  return useMemo(() => initializeApollo(initialState), [initialState])
}
