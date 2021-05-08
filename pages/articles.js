import React from 'react'

import ContentLayout from '../layouts/content'
import ArticleSuit from '../components/ArticleSuit'
import { useArticle } from '../hooks/useArticle'
import { COMMON_START_OFFSET, COMMON_LOAD_LIMIT } from '../constants'
import queries from '../graphql/queries'

const TITLE = 'Статьи'

const Articles = () => {
  const methods = useArticle()

  return (
    <ContentLayout
      title={TITLE}
      getType={'getArticles'}
      limit={COMMON_LOAD_LIMIT}
      emptyMessage={'Статей нет'}
      getQuery={queries.GET_ARTICLES}
      startOffsett={COMMON_START_OFFSET}
      variables={{ status: 'PUBLISHED' }}
      render={(document) => <ArticleSuit {...methods} article={document} layout={'row'} />}
    />
  )
}

export default Articles
