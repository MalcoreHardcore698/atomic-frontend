import React from 'react'

import { initializeApollo } from '../apollo'
import { useHelper } from '../hooks/useHelper'
import ContentLayout from '../layouts/content'
import ArticleCard from '../components/ArticleCard'
import { GridAside as Container } from '../components/Styled'
import { onArticleLink } from '../store/helpers/article'
import queries from '../graphql/queries'
import { getLabelCategory } from '../atomic-ui/utils/functions'

const TITLE = 'Статьи'
const START_OFFSET = 6

const Articles = ({ store }) => {
  const recall = useHelper()

  return (
    <ContentLayout
      title={TITLE}
      filters={[
        { type: 'DATEPICKER', placeholder: 'Дата публикации' },
        {
          type: 'SELECT',
          options: store?.categories.map((category) => ({
            value: category.id,
            label: getLabelCategory(category.name)
          }))
        }
      ]}
      options={[
        { label: 'Категория', value: 'category' },
        { label: 'Дата публикации', value: 'createdAt' }
      ]}
      query={queries.GET_ARTICLES}
      variables={{ status: 'PUBLISHED' }}
      store={{ documents: store?.articles }}>
      {({ documents }) => (
        <Container>
          {documents.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onLink={recall(onArticleLink, { id: article.id, article })}
            />
          ))}
        </Container>
      )}
    </ContentLayout>
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
        offset: 0,
        limit: START_OFFSET,
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
      store: {
        articles,
        categories
      }
    }
  }
}

export default Articles
