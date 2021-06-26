import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import List from '../List'
import ArticleSuit from '../ArticleSuit'
import { useArticle } from '../../hooks/useArticle'
import { INITIAL_DISPLAY_METHOD } from '../../layouts/content'
import { COMMON_LOAD_LIMIT, COMMON_START_OFFSET } from '../../constants'
import queries from '../../graphql/queries'

const Document = memo(({ layout, document, withStatus }) => {
  const methods = useArticle()
  return <ArticleSuit {...methods} article={document} layout={layout} withStatus={withStatus} />
})

export const ArticleList = memo(
  ({
    limit,
    layout,
    variables,
    startOffset,
    gridOptions,
    emptyMessage,
    initialDisplayMethod,
    withoutSearch,
    withStatus
  }) => {
    const search = useSelector((state) => state.root.search)
    return (
      <List
        type={'getArticles'}
        variables={variables}
        withoutMore={!search}
        gridOptions={gridOptions}
        emptyMessage={emptyMessage}
        query={queries.GET_ARTICLES}
        withoutSearch={withoutSearch}
        limit={limit ?? COMMON_LOAD_LIMIT}
        startOffset={startOffset ?? COMMON_START_OFFSET}
        initialDisplayMethod={initialDisplayMethod ?? INITIAL_DISPLAY_METHOD}
        component={(document) => (
          <Document layout={layout} document={document} withStatus={withStatus} />
        )}
      />
    )
  }
)

ArticleList.defaultProps = {
  emptyMessage: 'Статей нет',
  layout: 'row'
}

export default ArticleList
