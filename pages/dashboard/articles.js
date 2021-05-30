import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/article'

import ArticleSuit from '../../components/ArticleSuit'
import ContentLayout from '../../layouts/dashboard/content'
import { setDocuments } from '../../store/actions/documents'
import { useArticle } from '../../hooks/useArticle'
import { articles as filterConfig } from '../../components/FilterBar/config'
import { COMMON_START_OFFSET, DASHBOARD_LOAD_LIMIT } from '../../constants'
import queries from '../../graphql/queries'

const TITLE = 'Статьи'

const Articles = () => {
  const { onCreate, onEdit, ...methods } = useArticle({ isManage: true })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      icon={'document'}
      template={template}
      entityType={'article'}
      getType={'getArticles'}
      filterConfig={filterConfig}
      emptyMessage={'Статей нет'}
      limit={DASHBOARD_LOAD_LIMIT}
      getQuery={queries.GET_ARTICLES}
      deleteEntityMultiText={'статьи'}
      deleteEntitySingleText={'статья'}
      startOffset={COMMON_START_OFFSET}
      buttonCreateText={'Создать статью'}
      deleteQuery={queries.DELETE_ARTICLE}
      render={(document) => <ArticleSuit {...methods} article={document} withSocials={false} />}
      onCreate={onCreate}
      onEdit={onEdit}
    />
  )
}

export default Articles
