import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { omit } from '../atomic-ui/utils/functions'

import { setSearch, setParams } from '../store/actions/root'

export const parseParams = (params) => omit(params, ['search'])

export const useSearch = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const root = useSelector((state) => state.root)

  const onSearch = useCallback(
   (search, params) => {
     if (search) dispatch(setSearch(search))
     if (params) dispatch(setParams(parseParams(params)))

     router.push(
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
