import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

export const Wrap = styled.div`
  opacity: 0;
  transition: opacity 100ms ease;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
    `}
`

export const FadeLoad = ({ children }) => {
  const [isVisible, setVisible] = useState(true)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })

    observer.observe(domRef.current)
    return () => observer.unobserve(domRef.current)
  }, [])

  return (
    <Wrap isVisible={isVisible} ref={domRef}>
      {children}
    </Wrap>
  )
}

export default FadeLoad
