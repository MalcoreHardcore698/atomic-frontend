import { useMutation } from '@apollo/react-hooks'

import { useUpdateEffect } from './useUpdateEffect'

export const useMutationEffect = (query, key, setList) => {
  const [action, { data, loading, error }] = useMutation(query)
  useUpdateEffect(data, loading, key, setList)
  return [action, { data, loading, error }]
}

export default useMutationEffect
