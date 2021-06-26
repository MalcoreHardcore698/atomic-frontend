import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { omit } from '../atomic-ui/utils/functions'

import { setSearch, setParams, setIgnoreFetch } from '../store/actions/root'

export const parseParams = (params) => omit(params, ['search'])

export const useSearch = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const root = useSelector((state) => state.root)

  const onSearch = useCallback(
    (search, params) => {
      dispatch(setIgnoreFetch(false))

      dispatch(setSearch(search || ''))
      dispatch(setParams(parseParams(params || '')))

      return router.replace(
        {
          pathname: router.pathname,
          query: {
            ...(search ? { search } : {}),
            ...(params || root.params || {})
          }
        },
        undefined,
        { shallow: true }
      )
    },
    [root, router, dispatch]
  )

  useEffect(() => {
    const query = router.query
    if (query) {
      dispatch(setParams(parseParams(query)))
    }
  }, [router, dispatch])

  return [onSearch]
}
