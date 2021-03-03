import { useState, useEffect } from 'react'

export const useInfiniteScroll = ({ callbackOnTop, callbackOnBottom, offset = 50 }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const scrollElement = document.documentElement

    const onScroll = () => {
      if (!scrollElement) return
      const dir = scrollElement.scrollTop - lastScrollTop

      if (
        callbackOnBottom &&
        dir > 0 &&
        scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight - offset
      ) {
        callbackOnBottom(scrollElement.scrollTop, scrollElement.scrollHeight)
      }
      if (callbackOnTop && dir < 0 && scrollElement.scrollTop <= offset) {
        callbackOnTop(scrollElement.scrollTop, scrollElement.scrollHeight)
      }

      setLastScrollTop(scrollElement.scrollTop)
    }

    if (scrollElement) {
      window.addEventListener('scroll', onScroll)
    }

    return () => {
      if (scrollElement) {
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [callbackOnTop, callbackOnBottom, offset])
}

export default useInfiniteScroll
