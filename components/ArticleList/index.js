import React from 'react'

import List from '../List'
import ArticleSuit from '../ArticleSuit'
import { useArticle } from '../../hooks/useArticle'
import { INITIAL_DISPLAY_METHOD } from '../../layouts/content'
import { COMMON_LOAD_LIMIT, COMMON_START_OFFSET } from '../../constants'
import queries from '../../graphql/queries'

export const ArticleList = ({
  limit,
  layout,
  variables,
  startOffset,
  gridOptions,
  emptyMessage,
  initialDisplayMethod,
  withoutSearch,
  withoutMore,
  withStatus
}) => {
  const methods = useArticle()

  return (
    <List
      type={'getArticles'}
      variables={variables}
      gridOptions={gridOptions}
      withoutMore={withoutMore}
      emptyMessage={emptyMessage}
      query={queries.GET_ARTICLES}
      withoutSearch={withoutSearch}
      limit={limit ?? COMMON_LOAD_LIMIT}
      startOffset={startOffset ?? COMMON_START_OFFSET}
      initialDisplayMethod={initialDisplayMethod ?? INITIAL_DISPLAY_METHOD}
      component={(document) => (
        <ArticleSuit {...methods} article={document} layout={layout} withStatus={withStatus} />
      )}
    />
  )
}

ArticleList.defaultProps = {
  emptyMessage: 'Статей нет',
  layout: 'row'
}

export default ArticleList
