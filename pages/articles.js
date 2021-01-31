import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import Column from '../atomic-ui/components/Column'
import Alert from '../atomic-ui/components/Alert'
import DatePicker from '../atomic-ui/components/DatePicker'
import Select from '../atomic-ui/components/Select'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import DefaultLayout from '../layouts/default'
import ArticleCard from '../components/ArticleCard'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import { onArticleLink } from '../store/helpers/article'
import queries from '../graphql/queries'
import { filters } from '../__mock__'

const TITLE = 'Статьи'

const Wrap = styled(Column)`
  margin-top: 120px;
  margin-bottom: 80px;

  @media only screen and (max-width: 480px) {
    margin-top: 0;
  }
`

const Container = styled.aside`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(442px, 1fr));
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  }
`

const Articles = ({ store, categories }) => {
  const recall = useHelper()
  const documents = useSelector((state) => state.documents)
  const [date, onChangeDate] = useState()
  const [select, onChangeSelect] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)

  const articles = useMemo(() => documents || store.articles, [documents, store])

  return (
    <DefaultLayout title={TITLE}>
      <Wrap>
        <SearchBar onChangeFilter={() => setVisibleFilter(!visibleFilter)} />

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
              options={categories}
              placeholder={'Раздел'}
              selected={select}
              onChange={(item) => onChangeSelect(item)}
            />
          ]}
          options={filters}
        />

        <Container>
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onLink={recall(onArticleLink, { id: article.id, article })}
              />
            ))
          ) : (
            <Alert style={{ width: '100%', textAlign: 'center' }}>Новостей нет</Alert>
          )}
        </Container>
      </Wrap>
    </DefaultLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let articles = []
  let categories = []

  try {
    const response = await client.query({
      query: queries.GET_META_ARTICLES,
      variables: {
        status: 'PUBLISHED'
      }
    })

    if (response && response.data) {
      articles = response.data.getArticles
      categories = response.data.getCategories
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: { articles },
      categories
    }
  }
}

export default Articles
