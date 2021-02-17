import React from 'react'
import { Controller } from 'react-hook-form'
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
import Divider from '../../atomic-ui/components/Divider'
import Spinner from '../../atomic-ui/components/Spinner'

import Form from '../Form'
import { Loader } from '../Styled'
import { getLabelStatus, getLabelCategory } from '../../utils/functions'
import queries from '../../graphql/queries'
import config from '../../config'

export const Article = ({
  article,
  categories,
  statuses,
  mutation,
  appearance,
  className,
  canEditStatus,
  onSubmit
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
      {({ register, loading, errors, control, getValues }) =>
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
                {article ? 'Сохранить' : 'Создать'}
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
