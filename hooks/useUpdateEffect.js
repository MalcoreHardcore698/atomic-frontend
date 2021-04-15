import { useEffect } from 'react'

export const useUpdateEffect = (data, loading, key, setList) => {
  useEffect(() => {
    if (!loading && data && key) {
      const result = data[key]
      if (result) setList(result)
    }
  }, [loading, data, key])
}

export default useUpdateEffect
