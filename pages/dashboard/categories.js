import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/category'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import { onCategoryCreate, onCategoryEdit, onCategoryLink } from '../../store/helpers/category'
import CategoryCard from '../../components/CategoryCard'
import ContentLayout from '../../layouts/dashboard/content'
import { setDocuments } from '../../store/actions/documents'
import queries from '../../graphql/queries'

const TITLE = 'Категории'

const Categories = ({ types }) => {
  const recall = useHelper()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      icon={'folder'}
      template={template}
      emptyMessage={'Категорий нет'}
      buttonCreateText={'Создать категорию'}
      getType={'getCategories'}
      getQuery={queries.GET_CATEGORIES}
      deleteQuery={queries.DELETE_CATEGORY}
      deleteEntityMultiText={'категории'}
      deleteEntitySingleText={'категорию'}
      onLink={(category) => recall(onCategoryLink, { id: category.id, category })}
      onEdit={(category) =>
        recall(onCategoryEdit, {
          id: category.id,
          category,
          types,
          mutation: queries.UPDATE_CATEGORY
        })()
      }
      onCreate={recall(onCategoryCreate, { types, mutation: queries.CREATE_CATEGORY })}
      render={(document) => <CategoryCard category={document} />}
    />
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let types = []

  try {
    const response = await client.query({
      query: queries.GET_CATEGORIES
    })

    if (response && response.data) {
      types = response.data.getCategories
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      types
    }
  }
}

export default Categories
