import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Select from '../../atomic-ui/components/Select'
import TextEditor from '../../atomic-ui/components/TextEditor'
import Dropzone from '../../atomic-ui/components/Dropzone'
import Alert from '../../atomic-ui/components/Alert'
import Comment from '../../atomic-ui/components/Comment'
import Divider from '../../atomic-ui/components/Divider'
import Spinner from '../../atomic-ui/components/Spinner'
import Checkbox from '../../atomic-ui/components/Checkbox'
import { getLabelStatus, getLabelCategory } from '../../atomic-ui/utils/functions'

import Form from '../Form'
import { Loader } from '../Styled'
import queries from '../../graphql/queries'
import config from '../../config'

export const Header = styled(Row)`
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: end;
    grid-gap: var(--default-gap);
  }
`

export const Comments = ({ article, setValue }) => {
  const [comments, setComments] = useState([])

  const user = useSelector((state) => state.user)
  const [checkedAll, setCheckedAll] = useState(false)

  const { data: dataComments, loading: loadingComments } = article
    ? useQuery(queries.GET_COMMENTS, {
        variables: {
          id: article
        }
      })
    : { data: [], loading: false }

  const handleCheckedComments = (e) => {
    setCheckedAll(e.target.checked)
    setComments((prev) =>
      prev.map((item) => ({
        ...item,
        checked: !item.checked
      }))
    )
  }

  const handleCheckedComment = (message, value) => {
    setComments((prev) =>
      prev.map((item) =>
        item.id === message.id
          ? {
              ...item,
              checked: value
            }
          : item
      )
    )
  }

  const handleDeleteChecked = () => {
    setComments((prev) => prev.filter((message) => !message.checked))
  }

  const handleCommentEdit = (message, text) => {
    setComments((prev) =>
      prev.map((item) =>
        item.id === message.id
          ? {
              ...item,
              updatedAt: new Date(),
              text
            }
          : item
      )
    )
  }

  const handleCommentDelete = (message) => {
    setComments((prev) => prev.filter((item) => item.id !== message.id))
  }

  useEffect(() => {
    if (article && !loadingComments && dataComments) {
      setComments(
        dataComments.getComments.map((comment) => ({
          ...comment,
          checked: false
        }))
      )
    }
  }, [article, dataComments, loadingComments])

  useEffect(() => {
    setValue('comments', comments)
  }, [comments])

  if (!article || comments.length === 0) {
    return null
  }

  return (
    <React.Fragment>
      <Divider clear />

      <Title tag={'h4'}>Комментарии</Title>

      <Header>
        <Checkbox label={'Выделить все'} checked={checkedAll} onChange={handleCheckedComments} />
        <Button
          style={{ color: 'var(--default-color-red)' }}
          appearance={'clear'}
          onClick={handleDeleteChecked}>
          Удалить выделенное
        </Button>
      </Header>
      <Column style={{ gridGap: 5 }}>
        {comments.map((comment) => (
          <Comment
            key={`${comment.id}_${comment.checked}`}
            user={comment.author}
            message={comment.text}
            likes={comment.likes?.length}
            time={comment.createdAt !== comment.updatedAt ? comment.updatedAt : comment.createdAt}
            isLiked={comment.likes.find((likedUser) => likedUser.email === user.email)}
            isChecked={comment.checked}
            isUpdated={comment.createdAt !== comment.updatedAt}
            onChecked={(value) => handleCheckedComment(comment, value)}
            onEdit={(text) => handleCommentEdit(comment, text)}
            onDelete={() => handleCommentDelete(comment)}
            compact
          />
        ))}
      </Column>
    </React.Fragment>
  )
}

export const Article = ({
  article,
  categories,
  statuses,
  mutation,
  appearance,
  className,
  canEditStatus,
  onSubmit,
  isPurpose
}) => {
  const { data, loading: loadingArticle, error: errorArticle } = article
    ? useQuery(queries.GET_ARTICLE, {
        variables: {
          id: article
        }
      })
    : { data: { getArticle: {} }, loading: false, error: false }

  return (
    <Form className={className} appearance={appearance} mutation={mutation} onSubmit={onSubmit}>
      {({ register, loading, errors, control, getValues, setValue }) =>
        !loadingArticle && data ? (
          <React.Fragment>
            <Column>
              <Title tag={'h4'}>Основное</Title>

              {errors && errors.preview && (
                <Alert style={{ width: '100%' }} appearance={'error'}>
                  Выберите изображение для превью
                </Alert>
              )}
              <Controller
                name={'preview'}
                control={control}
                rules={{ required: true }}
                defaultValue={data.getArticle?.preview || null}
                render={({ value, onChange }) => (
                  <Dropzone
                    accept={'image/*'}
                    defaultValue={value}
                    onChange={onChange}
                    placeholder={'Перетащите сюда изображение для превью'}
                    tooltip={
                      'Разрешение: 960x480px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'
                    }
                  />
                )}
              />

              {errors && errors.title && (
                <Alert style={{ width: '100%' }} appearance={'error'}>
                  Введите заголовок статьи
                </Alert>
              )}
              <Input
                type={'text'}
                name={'title'}
                ref={register({ required: true })}
                defaultValue={getValues('title') || data.getArticle?.title}
                placeholder={'Название'}
                appearance={'ghost'}
                disabled={loading}
              />

              <Controller
                name={'category'}
                control={control}
                defaultValue={
                  data.getArticle?.category
                    ? {
                        value: data.getArticle.category.id,
                        label: getLabelCategory(data.getArticle.category.name)
                      }
                    : null
                }
                render={({ value, onChange }) => (
                  <Select
                    appearance={'ghost'}
                    placeholder={'Выберите раздел'}
                    options={categories
                      .filter((item) => item.type === 'DIVISION')
                      .map((item) => ({
                        value: item.id,
                        label: getLabelCategory(item.name)
                      }))}
                    onChange={onChange}
                    defaultValue={value}
                    isLoading={loading}
                    isClearable
                  />
                )}
              />

              {errors && errors.body && (
                <Alert style={{ width: '100%' }} appearance={'error'}>
                  Введите содержание статьи
                </Alert>
              )}
              <Controller
                name={'body'}
                control={control}
                defaultValue={getValues('body') || data.getArticle?.body || null}
                rules={{ required: true }}
                render={({ value, onChange }) => (
                  <TextEditor
                    apiKey={config.get('tiny-key')}
                    appearance={'ghost'}
                    defaultValue={value}
                    onChange={onChange}
                  />
                )}
              />

              <Comments article={article} setValue={setValue} />

              {canEditStatus && <Divider clear />}

              {canEditStatus && (
                <Controller
                  name={'status'}
                  control={control}
                  defaultValue={
                    data.getArticle?.status
                      ? {
                          value: data.getArticle.status,
                          label: getLabelStatus(data.getArticle.status)
                        }
                      : null
                  }
                  render={({ value, onChange }) => (
                    <Select
                      appearance={'ghost'}
                      placeholder={'Выберите статус'}
                      options={statuses.map((item) => ({
                        value: item,
                        label: getLabelStatus(item)
                      }))}
                      onChange={onChange}
                      defaultValue={value}
                      menuPlacement={'top'}
                      isLoading={loading}
                      isClearable
                    />
                  )}
                />
              )}
            </Column>

            <Divider clear />

            <Row>
              <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
                {isPurpose ? 'Предложить' : article ? 'Сохранить' : 'Создать'}
              </Button>
            </Row>
          </React.Fragment>
        ) : errorArticle ? (
          <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
            Упс! Не удалось загрузить информацию о статье
          </Alert>
        ) : (
          <Loader>
            <Spinner />
          </Loader>
        )
      }
    </Form>
  )
}

export default Article
