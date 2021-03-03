import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'

import Alert from '../../atomic-ui/components/Alert'
import Spinner from '../../atomic-ui/components/Spinner'

import { Loader } from '../Styled'
import LazyLoad from '../LazyLoad'
import ArticleCard from '../ArticleCard'
import { useHelper } from '../../hooks/useHelper'
import { onArticleLink } from '../../store/helpers/article'
import queries from '../../graphql/queries'

export const ArticleList = ({ variables, layout, initialList }) => {
  const recall = useHelper()
  const user = useSelector((state) => state.user)
  const [articles, setArticles] = useState(initialList || [])

  const { data, loading, error } = initialList
    ? { data: null, loading: false, error: false }
    : useQuery(queries.GET_ARTICLES, { variables })

  useEffect(() => {
    if (!loading && data) {
      setArticles(data.getArticles)
    }
  }, [data, loading])

  useEffect(() => {
    if (initialList?.length > 0) setArticles(initialList)
  }, [initialList])

  return (!loading && data) || articles.length > 0 ? (
    articles.map((article) => (
      <LazyLoad key={article.id}>
        <ArticleCard
          article={article}
          layout={layout || 'column'}
          owned={user?.articles?.find((candidate) => candidate.id === article.id)}
          onLink={recall(onArticleLink, { id: article.id, auth: user?.email })}
        />
      </LazyLoad>
    ))
  ) : error ? (
    <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
      Не удалось загрузить данные
    </Alert>
  ) : loading ? (
    <Loader>
      <Spinner />
    </Loader>
  ) : (
    <Alert style={{ width: '100%', textAlign: 'center' }}>Новостей нет</Alert>
  )
}

export default ArticleList
