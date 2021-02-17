import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Controller } from 'react-hook-form'
import { useQuery } from '@apollo/react-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { v4 } from 'uuid'

import Row from '../../atomic-ui/components/Row'
import Column from '../../atomic-ui/components/Column'
import Grid from '../../atomic-ui/components/Grid'
import Title from '../../atomic-ui/components/Title'
import Input from '../../atomic-ui/components/Input'
import Button from '../../atomic-ui/components/Button'
import Select from '../../atomic-ui/components/Select'
import TextArea from '../../atomic-ui/components/TextArea'
import TextEditor from '../../atomic-ui/components/TextEditor'
import Dropzone from '../../atomic-ui/components/Dropzone'
import ActionRow from '../../atomic-ui/components/ActionRow'
import Difinition from '../../atomic-ui/components/Difinition'
import Spinner from '../../atomic-ui/components/Spinner'
import Divider from '../../atomic-ui/components/Divider'
import Tooltip from '../../atomic-ui/components/Tooltip'
import Alert from '../../atomic-ui/components/Alert'
import Icon from '../../atomic-ui/components/Icon'

import Form from '../Form'
import { Loader } from '../Styled'
import { getLabelStatus, getLabelCategory, getLabelRole, getFileSize } from '../../utils/functions'
import { setProjectMembers, setProjectScreenshots, setProjectFiles } from '../../store/actions/root'
import queries from '../../graphql/queries'
import config from '../../config'

export const AdaptiveRow = styled(Row)`
  grid-gap: var(--default-gap);

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const Preview = styled(Dropzone)`
  width: 40%;
  height: 289px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 256px;
  }
`

export const General = styled(Column)`
  width: 60%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

export const DescriptionArea = styled(TextArea)`
  height: 100%;
`

export const RemoveTooltip = styled(Tooltip)`
  display: none;
`

export const AlignmentRow = styled(Row)`
  position: relative;
  justify-content: space-between;
  align-items: center;

  &:hover {
    ${RemoveTooltip} {
      display: flex;
    }
  }
`

export const Project = ({
  project,
  companies,
  categories,
  statuses,
  mutation,
  appearance,
  className,
  canEditStatus,
  onMemberAdd,
  onScreenshotAdd,
  onFileAdd,
  onMemberRemove,
  onScreenshotRemove,
  onFileRemove,
  onSubmit
}) => {
  const { data, loading: loadingData, error } = project
    ? useQuery(queries.GET_PROJECT, {
        variables: {
          id: project
        }
      })
    : { data: { getProject: {} }, loading: false, error: false }

  const { members, screenshots, files } = useSelector((state) => ({
    members: state.root.members,
    screenshots: state.root.screenshots,
    files: state.root.files
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loadingData && data) {
      if (data.getProject?.members) {
        dispatch(setProjectMembers(data.getProject.members))
      }
      if (data.getProject?.screenshots) {
        dispatch(setProjectScreenshots(data.getProject.screenshots))
      }
      if (data.getProject?.files) {
        dispatch(setProjectFiles(data.getProject.files))
      }
    }
  }, [loadingData, data])

  return (
    <Form
      className={className}
      appearance={appearance}
      mutation={mutation}
      onSubmit={(form, action) => onSubmit({ ...form, members, screenshots, files }, action)}>
      {({ register, loading, errors, control, getValues }) =>
        !loading && !loadingData && data ? (
          <React.Fragment>
            <Title tag={'h4'}>Основное</Title>

            <AdaptiveRow>
              {errors && errors.preview && (
                <Alert style={{ width: '100%' }} appearance={'error'}>
                  Выберите изображение для превью
                </Alert>
              )}
              <Controller
                name={'preview'}
                control={control}
                rules={{ required: true }}
                defaultValue={getValues('preview') || data.getProject?.preview || null}
                render={({ value, onChange }) => (
                  <Preview
                    accept={'image/*'}
                    defaultValue={value}
                    onChange={onChange}
                    placeholder={'Перетащите сюда изображение для превью'}
                    tooltip={
                      'Разрешение: 700x600px. Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'
                    }
                  />
                )}
              />

              <General>
                {errors && errors.title && (
                  <Alert style={{ width: '100%' }} appearance={'error'}>
                    Введите название проекта
                  </Alert>
                )}
                <Input
                  type={'text'}
                  name={'title'}
                  ref={register({ required: true })}
                  defaultValue={getValues('title') || data.getProject?.title}
                  placeholder={'Название'}
                  appearance={'ghost'}
                  disabled={loading}
                />

                <Controller
                  name={'company'}
                  control={control}
                  defaultValue={
                    getValues('company') ||
                    (data.getProject?.company
                      ? {
                          value: data.getProject.company.id,
                          label: data.getProject.company.name
                        }
                      : null)
                  }
                  render={({ value, onChange }) => (
                    <Select
                      options={
                        !loading && companies
                          ? companies.map((user) => ({
                              value: user,
                              label: user.name
                            }))
                          : []
                      }
                      appearance={'ghost'}
                      defaultValue={value}
                      placeholder={'Выберите компанию'}
                      onChange={onChange}
                      isLoading={loading}
                      isSearchable
                    />
                  )}
                />

                <Controller
                  name={'category'}
                  control={control}
                  defaultValue={
                    getValues('category') ||
                    (data.getProject?.category
                      ? {
                          value: data.getProject.category.id,
                          label: getLabelCategory(data.getProject.category.name)
                        }
                      : null)
                  }
                  render={({ value, onChange }) => (
                    <Select
                      appearance={'ghost'}
                      placeholder={'Выберите раздел'}
                      options={categories
                        .filter((category) => category.type === 'DIVISION')
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

                {errors && errors.description && (
                  <Alert style={{ width: '100%' }} appearance={'error'}>
                    Введите описание проекта
                  </Alert>
                )}
                <DescriptionArea
                  ref={register()}
                  name={'description'}
                  appearance={'ghost'}
                  defaultValue={getValues('description') || data.getProject?.description}
                  placeholder={'Описание'}
                  disabled={loading}
                />
              </General>
            </AdaptiveRow>

            <Divider clear />

            {errors && errors.body && (
              <Alert style={{ width: '100%' }} appearance={'error'}>
                Введите содержание статьи
              </Alert>
            )}
            <Controller
              name={'body'}
              control={control}
              rules={{ required: true }}
              defaultValue={getValues('body') || data.getProject?.body || null}
              render={({ value, onChange }) => (
                <TextEditor
                  apiKey={config.get('tiny-key')}
                  appearance={'ghost'}
                  defaultValue={value}
                  onChange={onChange}
                />
              )}
            />

            <Divider clear />

            <Column style={{ flexGrow: 1 }}>
              <ActionRow title={'Участники проeкта'} onAdd={onMemberAdd || (() => {})} action />

              {members?.length > 0 ? (
                <Grid percentage={'minmax(320px, 1fr)'}>
                  {members.map((member) => (
                    <AlignmentRow key={v4()}>
                      <Difinition
                        key={member.value?.email || member?.email}
                        img={
                          member.value?.avatar?.path ||
                          member.avatar?.path ||
                          '/images/avatar-default.png'
                        }
                        label={getLabelRole(member?.value?.account || member?.account)}
                        text={member.value?.name || member?.name}
                      />
                      <RemoveTooltip place={'left'} text={'Удалить'}>
                        <Button
                          type={'button'}
                          kind={'icon'}
                          size={'xs'}
                          onClick={() => onMemberRemove(member?.value?.email || member?.email)}>
                          <Icon size={'xs'} icon={'delete'} stroke={'white'} />
                        </Button>
                      </RemoveTooltip>
                    </AlignmentRow>
                  ))}
                </Grid>
              ) : (
                <Alert style={{ textAlign: 'center' }} width={'100%'}>
                  Добавьте участников
                </Alert>
              )}
            </Column>

            <Divider clear />

            <ActionRow
              title={'Изображения'}
              info={'Допустимые форматы: jpeg, jpg, png. Макс. размер: 15 MB'}
              onAdd={(!project && onScreenshotAdd) || (() => {})}
              action
            />

            {screenshots?.length > 0 ? (
              <Grid percentage={'minmax(196px, 1fr)'}>
                {screenshots.map((screenshot) => (
                  <AlignmentRow key={v4()}>
                    <Difinition
                      key={screenshot.id}
                      img={screenshot.blob || screenshot.file?.path || screenshot.path}
                      label={
                        (
                          screenshot.file?.name ||
                          screenshot.file?.path ||
                          screenshot?.name ||
                          screenshot?.path
                        )
                          .split('/')
                          .slice(-1)[0]
                      }
                      text={getFileSize(screenshot.size || screenshot.file?.size)}
                    />
                    {!project && (
                      <RemoveTooltip place={'left'} text={'Удалить'}>
                        <Button
                          type={'button'}
                          kind={'icon'}
                          size={'xs'}
                          onClick={() => onScreenshotRemove(screenshot.id)}>
                          <Icon size={'xs'} icon={'delete'} stroke={'white'} />
                        </Button>
                      </RemoveTooltip>
                    )}
                  </AlignmentRow>
                ))}
              </Grid>
            ) : (
              <Alert style={{ textAlign: 'center' }} width={'100%'}>
                Добавьте изображения
              </Alert>
            )}

            <Divider clear />

            <ActionRow
              title={'Файлы'}
              info={'Допустимые форматы: pdf, docx, .doc. Макс. размер: 15 MB'}
              onAdd={onFileAdd || (() => {})}
              action
            />

            {files?.length > 0 ? (
              <Grid percentage={'minmax(196px, 1fr)'}>
                {files.map((file) => (
                  <AlignmentRow key={v4()}>
                    <Difinition
                      key={file.id}
                      icon={'document'}
                      label={
                        (file.file?.name || file.file?.path || file?.name || file?.path)
                          .split('/')
                          .slice(-1)[0]
                      }
                      text={getFileSize(file.size || file.file?.size)}
                    />
                    {!project && (
                      <RemoveTooltip place={'left'} text={'Удалить'}>
                        <Button
                          type={'button'}
                          kind={'icon'}
                          size={'xs'}
                          onClick={() => onFileRemove(file.id)}>
                          <Icon size={'xs'} icon={'delete'} stroke={'white'} />
                        </Button>
                      </RemoveTooltip>
                    )}
                  </AlignmentRow>
                ))}
              </Grid>
            ) : (
              <Alert style={{ textAlign: 'center' }} width={'100%'}>
                Добавьте файлы
              </Alert>
            )}

            <Divider clear />

            {errors && errors.presentation && (
              <Alert style={{ width: '100%' }} appearance={'error'}>
                Вставьте ссылку на видео
              </Alert>
            )}
            <Input
              type={'text'}
              ref={register()}
              name={'presentation'}
              defaultValue={getValues('presentation') || data.getProject?.presentation}
              placeholder={'Вставьте ссылку на видео'}
              appearance={'ghost'}
              disabled={loading}
            />

            {canEditStatus && <Divider clear />}

            {canEditStatus && (
              <Controller
                name={'status'}
                control={control}
                defaultValue={
                  getValues('status') ||
                  (data.getProject?.status
                    ? {
                        value: data.getProject.status,
                        label: getLabelStatus(data.getProject.status)
                      }
                    : null)
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

            <Divider clear />

            <Row>
              <Button style={{ flexGrow: 1 }} type={'submit'} disabled={loading}>
                {project ? 'Сохранить' : 'Создать'}
              </Button>
            </Row>
          </React.Fragment>
        ) : error ? (
          <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
            Упс! Не удалось загрузить информацию о проекте
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

export default Project
