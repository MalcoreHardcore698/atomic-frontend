import React from 'react'
import { LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component'

const LazyLoad = ({ children }) => <LazyLoadComponent>{children}</LazyLoadComponent>

export default trackWindowScroll(LazyLoad)
