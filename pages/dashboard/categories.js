import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/category'

import { useHelper } from '../../hooks/useHelper'
import { onCategoryCreate, onCategoryEdit, onCategoryLink } from '../../store/helpers/category'
import CategoryCard from '../../components/CategoryCard'
import ContentLayout from '../../layouts/dashboard/content'
import { setDocuments } from '../../store/actions/documents'
import queries from '../../graphql/queries'

const TITLE = 'Категории'

const LIMIT = 32
const START_OFFSET = 0

const Categories = () => {
  const recall = useHelper()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      limit={LIMIT}
      icon={'folder'}
      template={template}
      startOffset={START_OFFSET}
      emptyMessage={'Категорий нет'}
      buttonCreateText={'Создать категорию'}
      entityType={'category'}
      getType={'getCategories'}
      getQuery={queries.GET_CATEGORIES}
      deleteQuery={queries.DELETE_CATEGORY}
      deleteEntityMultiText={'категории'}
      deleteEntitySingleText={'категорию'}
      onLink={(category) => recall(onCategoryLink, { id: category.id, category })()}
      onEdit={(category, onAfter) =>
        recall(onCategoryEdit, {
          id: category.id,
          category,
          mutation: queries.UPDATE_CATEGORY,
          onAfter
        })()
      }
      onCreate={(onAfter) =>
        recall(onCategoryCreate, { mutation: queries.CREATE_CATEGORY, onAfter })()
      }
      render={(document) => <CategoryCard category={document} />}
    />
  )
}

export default Categories
