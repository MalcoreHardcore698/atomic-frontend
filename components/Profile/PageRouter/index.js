import React from 'react'
import { useSelector } from 'react-redux'

import ProjectList from '../../ProjectList'
import ArticleList from '../../ArticleList'
import Feed from '../Feed'

export const PageRouter = ({ page }) => {
  const user = useSelector((state) => state.user)

  switch (page) {
    case 'projects':
      return <ProjectList variables={{ author: user.email }} preview withStatus />
    case 'liked':
      return <ProjectList variables={{ rating: user.email }} />
    case 'articles':
      return <ArticleList variables={{ author: user.email }} layout={'row'} withStatus />
    case 'feed':
      return <Feed />
    default:
      return null
  }
}

export default PageRouter
