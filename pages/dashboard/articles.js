import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Grid from '../../atomic-ui/components/Grid'
import Alert from '../../atomic-ui/components/Alert'
import DatePicker from '../../atomic-ui/components/DatePicker'
import Select from '../../atomic-ui/components/Select'
import Table from '../../atomic-ui/components/Table'
import templates from '../../atomic-ui/components/Table/templates'
import { createSelectOptions } from '../../atomic-ui/utils/functions'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import DashboardLayout from '../../layouts/dashboard'
import HandleBar from '../../components/HandleBar'
import FilterBar from '../../components/FilterBar'
import ArticleCard, { Wrap } from '../../components/ArticleCard'
import LazyLoad from '../../components/LazyLoad'
import FadeLoad from '../../components/FadeLoad'
import {
  onArticleCreate,
  onArticleEdit,
  onArticleDelete,
  onArticleLink
} from '../../store/helpers/article'
import { setDocuments } from '../../store/actions/documents'
import queries from '../../graphql/queries'

const TITLE = 'Статьи'

const ArticlesGrid = styled(Grid)`
  ${Wrap} {
    height: 100%;
  }
`

const Articles = ({ store, categories, statuses }) => {
  const recall = useHelper()
  const { user, documents } = useSelector((state) => ({
    user: state.user,
    documents: state.documents
  }))
  const dispatch = useDispatch()
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [displayMethod, onChangeDisplayMethod] = useState('grid')
  const canEditStatus = useMemo(() => user && user.role.name === 'ADMIN', [user])

  const articles = useMemo(() => documents || store.articles, [documents, store])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <DashboardLayout title={TITLE}>
      <HandleBar
        icon={'document'}
        title={TITLE}
        buttonCreateText={'Создать статью'}
        onCreate={recall(onArticleCreate, {
          categories,
          statuses,
          canEditStatus,
          mutation: queries.CREATE_ARTICLE
        })}
        onChangeVisibleFilter={() => setVisibleFilter(!visibleFilter)}
        onChangeDisplayMethod={(item) => onChangeDisplayMethod(item.value)}
      />

      <FilterBar
        isOpen={visibleFilter}
        filters={[
          <DatePicker
            key={0}
            value={date}
            placeholder={'Дата публикации'}
            onChange={onChangeDate}
            withNavigate
          />,
          <Select
            key={1}
            options={createSelectOptions(categories)}
            placeholder={'Раздел'}
            selected={select}
            onChange={(item) => onChangeSelect(item)}
          />
        ]}
        options={
          displayMethod === 'list'
            ? []
            : templates.article.map((item, index) => ({
                label: item.header,
                value: index
              }))
        }
      />

      {articles.length === 0 && (
        <Alert style={{ width: '100%', textAlign: 'center' }}>Новостей нет</Alert>
      )}

      {displayMethod === 'list' && (
        <Table
          data={articles}
          template={templates.article}
          onChecked={() => {}}
          onClick={(article) => recall(onArticleLink, { id: article.id })()}
          onDelete={(article) =>
            recall(onArticleDelete, { id: article.id, article, mutation: queries.DELETE_ARTICLE })()
          }
          onEdit={(article) =>
            recall(onArticleEdit, {
              id: article.id,
              categories,
              statuses,
              canEditStatus,
              mutation: queries.UPDATE_ARTICLE
            })()
          }
          style={{ overflowX: 'auto', width: 'calc(100vw - 290px)' }}
        />
      )}

      {displayMethod === 'grid' && (
        <ArticlesGrid>
          {articles.map((article) => (
            <FadeLoad key={article.id}>
              <LazyLoad>
                <ArticleCard
                  layout={'column'}
                  article={article}
                  onChecked={() => {}}
                  onLink={recall(onArticleLink, { id: article.id })}
                  onDelete={recall(onArticleDelete, {
                    id: article.id,
                    article,
                    mutation: queries.DELETE_ARTICLE
                  })}
                  onEdit={recall(onArticleEdit, {
                    id: article.id,
                    categories,
                    statuses,
                    canEditStatus,
                    mutation: queries.UPDATE_ARTICLE
                  })}
                />
              </LazyLoad>
            </FadeLoad>
          ))}
        </ArticlesGrid>
      )}
    </DashboardLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let articles = []
  let categories = []
  let statuses = []

  try {
    const response = await client.query({
      query: queries.GET_META_DASHBOARD_ARTICLES
    })

    if (response && response.data) {
      articles = response.data.getArticles
      categories = response.data.getCategories
      statuses = response.data.getPostStatus
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: { articles },
      categories,
      statuses
    }
  }
}

export default Articles
