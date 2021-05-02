import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/article'

import { useHelper } from '../../hooks/useHelper'
import ArticleCard from '../../components/ArticleCard'
import ContentLayout from '../../layouts/dashboard/content'
import { onArticleCreate, onArticleEdit, onArticleLink } from '../../store/helpers/article'
import { setDocuments } from '../../store/actions/documents'
import queries from '../../graphql/queries'

const TITLE = 'Статьи'
const START_OFFSET = 0
const LIMIT = 12

const Articles = () => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const canEditStatus = useMemo(() => user && user.role.name === 'ADMIN', [user])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      limit={LIMIT}
      icon={'document'}
      template={template}
      startOffset={START_OFFSET}
      emptyMessage={'Статей нет'}
      buttonCreateText={'Создать статью'}
      getType={'getArticles'}
      getQuery={queries.GET_ARTICLES}
      deleteQuery={queries.DELETE_ARTICLE}
      deleteEntityMultiText={'статьи'}
      deleteEntitySingleText={'статья'}
      onLink={(article) => recall(onArticleLink, { id: article.id })()}
      onEdit={(article, onAfter) =>
        recall(onArticleEdit, {
          id: article.id,
          canEditStatus,
          mutation: queries.UPDATE_ARTICLE,
          onAfter
        })()
      }
      onCreate={(onAfter) =>
        recall(onArticleCreate, {
          canEditStatus,
          mutation: queries.CREATE_ARTICLE,
          onAfter
        })()
      }
      render={(document) => <ArticleCard article={document} withSocials />}
    />
  )
}

export default Articles
