import React from 'react'

import CategoryForm from '../../components/FormCategory'
import DeleteForm from '../../components/FormDelete'
import CategoryView from '../../components/CategoryView'
import { setDocuments } from '../actions/documents'
import { setDrawer } from '../actions/drawer'
import { setItem } from '../actions/snacks'

export function onCategoryLink(dispatch, props) {
  const { id } = props

  dispatch(
    setDrawer({
      icon: 'folder',
      title: 'Категория',
      content: <CategoryView category={id} appearance={'clear'} />
    })
  )
}

export function onCategoryCreate(dispatch, props) {
  const { types, mutation } = props

  dispatch(
    setDrawer({
      icon: 'folder',
      title: 'Создание категории',
      content: (
        <CategoryForm
          mutation={mutation}
          categoryTypes={types}
          appearance={'clear'}
          onSubmit={async (form, action) => {
            try {
              const categories = await action({
                variables: {
                  input: {
                    name: form.name,
                    type: form.type.value,
                    description: form.description
                  }
                }
              })
              dispatch(setDocuments(categories.data.createCategory))
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Категория успешно создана'
                })
              )
            } catch {
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось создать категорию'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onCategoryEdit(dispatch, props) {
  const { category, types, mutation } = props

  dispatch(
    setDrawer({
      icon: 'folder',
      title: 'Редактирование категории',
      content: (
        <CategoryForm
          category={category}
          mutation={mutation}
          categoryTypes={types}
          appearance={'clear'}
          onSubmit={async (form, action) => {
            try {
              const categories = await action({
                variables: {
                  id: category.id,
                  input: {
                    name: form.name,
                    type: form.type.value,
                    description: form.description
                  }
                }
              })
              dispatch(setDocuments(categories.data.updateCategory))
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Категория успешно отредактирована'
                })
              )
            } catch {
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось отредактировать категорию'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onCategoryDelete(dispatch, props) {
  const { category, mutation } = props

  dispatch(
    setDrawer({
      icon: 'delete',
      color: 'red',
      title: 'Удаление категории',
      content: (
        <DeleteForm
          mutation={mutation}
          appearance={'clear'}
          onCancel={() => dispatch(setDrawer(null))}
          onSubmit={async (_, action) => {
            try {
              const categories = await action({
                variables: { id: category.id }
              })
              dispatch(setDocuments(categories.data.deleteCategory))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Категория успешно удалена'
                })
              )
            } catch {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось удалить категорию'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}>
          <CategoryView category={category} appearance={'clear'} />
        </DeleteForm>
      )
    })
  )
}
