import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import { setSearch } from '../store/actions/root'

export const useSearch = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const onSearch = (value) => {
    dispatch(setSearch(value))

    console.log(router.query, router)

    router.push(
      {
        pathname: router.pathname,
        query: {
          search: value
        }
      },
      undefined,
      { shallow: true }
    )
  }

  return [onSearch]
}
