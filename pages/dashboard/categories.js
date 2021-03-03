import React, { useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '../../atomic-ui/components/Grid'
import Alert from '../../atomic-ui/components/Alert'
import DatePicker from '../../atomic-ui/components/DatePicker'
import Table from '../../atomic-ui/components/Table'
import templates from '../../atomic-ui/components/Table/templates'

import { initializeApollo } from '../../apollo'
import { useHelper } from '../../hooks/useHelper'
import DashboardLayout from '../../layouts/dashboard'
import HandleBar from '../../components/HandleBar'
import FilterBar from '../../components/FilterBar'
import CategoryCard from '../../components/CategoryCard'
import LazyLoad from '../../components/LazyLoad'
import FadeLoad from '../../components/FadeLoad'
import {
  onCategoryCreate,
  onCategoryEdit,
  onCategoryDelete,
  onCategoryLink
} from '../../store/helpers/category'
import { setDocuments } from '../../store/actions/documents'
import queries from '../../graphql/queries'

const TITLE = 'Категории'

const Categories = ({ store, types }) => {
  const recall = useHelper()
  const documents = useSelector((state) => state.documents)
  const dispatch = useDispatch()
  const [datePublish, onChangeDatePublish] = useState()
  const [dateCreate, onChangeDateCreate] = useState()
  const [visibleFilter, setVisibleFilter] = useState(false)
  const [displayMethod, onChangeDisplayMethod] = useState('grid')

  const categories = useMemo(() => documents || store.categories, [documents, store])

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <DashboardLayout title={TITLE}>
      <HandleBar
        icon={'folder'}
        title={TITLE}
        buttonCreateText={'Создать категорию'}
        onCreate={recall(onCategoryCreate, { types, mutation: queries.CREATE_CATEGORY })}
        onChangeVisibleFilter={() => setVisibleFilter(!visibleFilter)}
        onChangeDisplayMethod={(item) => onChangeDisplayMethod(item.value)}
      />

      <FilterBar
        isOpen={visibleFilter}
        filters={[
          <DatePicker
            key={0}
            value={datePublish}
            placeholder={'Дата публикации'}
            onChange={onChangeDatePublish}
            withNavigate
          />,
          <DatePicker
            key={0}
            value={dateCreate}
            placeholder={'Дата создания'}
            onChange={onChangeDateCreate}
            withNavigate
          />
        ]}
        options={
          displayMethod === 'list'
            ? []
            : templates.category.map((item, index) => ({
                label: item.header,
                value: index
              }))
        }
      />

      {categories.length === 0 && (
        <Alert style={{ width: '100%', textAlign: 'center' }}>Категорий нет</Alert>
      )}

      {displayMethod === 'list' && (
        <Table
          data={categories}
          template={templates.category}
          onChecked={() => {}}
          onClick={(category) => recall(onCategoryLink, { id: category.id, category })()}
          onDelete={(category) =>
            recall(onCategoryDelete, {
              id: category.id,
              category,
              mutation: queries.DELETE_CATEGORY
            })()
          }
          onEdit={(category) =>
            recall(onCategoryEdit, {
              id: category.id,
              category,
              types,
              mutation: queries.UPDATE_CATEGORY
            })()
          }
          style={{ overflowX: 'auto', width: 'calc(100vw - 290px)' }}
        />
      )}

      {displayMethod === 'grid' && (
        <Grid>
          {categories.map((category) => (
            <FadeLoad key={category.id}>
              <LazyLoad>
                <CategoryCard
                  category={category}
                  onChecked={() => {}}
                  onLink={recall(onCategoryLink, { id: category.id, category })}
                  onDelete={recall(onCategoryDelete, {
                    id: category.id,
                    category,
                    mutation: queries.DELETE_CATEGORY
                  })}
                  onEdit={recall(onCategoryEdit, {
                    id: category.id,
                    category,
                    types,
                    mutation: queries.UPDATE_CATEGORY
                  })}
                />
              </LazyLoad>
            </FadeLoad>
          ))}
        </Grid>
      )}
    </DashboardLayout>
  )
}

export async function getServerSideProps() {
  const client = initializeApollo()

  let categories = []
  let types = []

  try {
    const response = await client.query({
      query: queries.GET_META_DASHBOARD_CATEGORIES
    })

    if (response && response.data) {
      categories = response.data.getCategories
      types = response.data.getCategoryTypes
    }
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      store: { categories },
      types
    }
  }
}

export default Categories
