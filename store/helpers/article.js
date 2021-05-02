import React from 'react'

import ArticleForm from '../../components/FormArticle'
import DeleteForm from '../../components/FormDelete'
import ArticleCard from '../../components/ArticleCard'
import ArticleView from '../../components/ArticleView'
import { setDocuments } from '../actions/documents'
import { setDrawer } from '../actions/drawer'
import { setItem } from '../actions/snacks'
import { onUserLink } from './user'

export function onArticleLink(dispatch, props) {
  const { id, auth } = props

  dispatch(
    setDrawer({
      icon: 'document',
      title: 'Статья',
      content: (
        <ArticleView
          article={id}
          appearance={'clear'}
          onCommentLink={(user) => onUserLink(dispatch, { email: user, auth })}
        />
      )
    })
  )
}

export function onArticleCreate(dispatch, props) {
  const { categories, statuses, canEditStatus, mutation, isPurpose, onAfter } = props

  dispatch(
    setDrawer({
      icon: 'document',
      title: `${isPurpose ? 'Предложение' : 'Создание'} статьи`,
      content: (
        <ArticleForm
          mutation={mutation}
          categories={categories}
          statuses={statuses}
          appearance={'clear'}
          canEditStatus={canEditStatus}
          onSubmit={async (form, action) => {
            try {
              const articles = await action({
                variables: {
                  input: {
                    title: form.title,
                    body: form.body,
                    preview: form.preview?.file,
                    previewSize: form.preview?.file.size,
                    category: form.category?.value,
                    status: form.status?.value
                  }
                }
              })
              dispatch(setDocuments(articles.data.createArticle))
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Статья успешно создана'
                })
              )
              if (onAfter) onAfter()
            } catch (err) {
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось создать статью'
                })
              )
            }
          }}
          isPurpose={isPurpose}
        />
      )
    })
  )
}

export function onArticleEdit(dispatch, props) {
  const { id, auth, categories, statuses, canEditStatus, mutation, onAfter } = props

  dispatch(
    setDrawer({
      icon: 'document',
      title: 'Редактирование статьи',
      content: (
        <ArticleForm
          article={id}
          mutation={mutation}
          categories={categories}
          statuses={statuses}
          appearance={'clear'}
          canEditStatus={canEditStatus}
          onSubmit={async (form, action) => {
            try {
              const articles = await action({
                variables: {
                  id,
                  input: {
                    title: form.title,
                    body: form.body,
                    preview: form.preview?.file,
                    previewSize: form.preview?.file?.size,
                    category: form.category?.value,
                    status: form.status?.value
                  }
                }
              })
              dispatch(setDocuments(articles.data.updateArticle))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Статья успешно отредактирована'
                })
              )
              if (onAfter) onAfter()
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось отредактировать статью'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}
          onCommentLink={(user) => onUserLink(dispatch, { email: user, auth })}
        />
      )
    })
  )
}

export function onArticleDelete(dispatch, props) {
  const { id, article, auth, mutation } = props

  dispatch(
    setDrawer({
      icon: 'delete',
      color: 'red',
      title: 'Удаление статьи',
      content: (
        <DeleteForm
          mutation={mutation}
          appearance={'clear'}
          onCancel={() => dispatch(setDrawer(null))}
          onSubmit={async (_, action) => {
            try {
              const articles = await action({
                variables: { id }
              })
              dispatch(setDocuments(articles.data.deleteArticle))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Статья успешно удалена'
                })
              )
            } catch {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось удалить статью'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}>
          <ArticleCard
            article={article}
            appearance={'clear'}
            onLink={() => onArticleLink(dispatch, { id: article.id })}
            onCommentLink={(user) => onUserLink(dispatch, { email: user, auth })}
          />
        </DeleteForm>
      )
    })
  )
}
