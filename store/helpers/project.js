import React from 'react'
import styled from 'styled-components'

import Grid from '../../atomic-ui/components/Grid'
import Column from '../../atomic-ui/components/Column'
import Button from '../../atomic-ui/components/Button'
import Alert from '../../atomic-ui/components/Alert'
import Screenshot from '../../atomic-ui/components/Screenshot'
import Difinition from '../../atomic-ui/components/Difinition'
import Icon from '../../atomic-ui/components/Icon'

import AddMemberForm from '../../components/FormAddMember'
import AddFileForm from '../../components/FormAddFile'
import ProjectForm from '../../components/FormProject'
import DeleteForm from '../../components/FormDelete'
import SureDeleteForm, { Content as ContentSureDelete } from '../../components/FormSureDelete'
import ProjectCard from '../../components/ProjectCard'
import ProjectView from '../../components/ProjectView'
import { setDocuments } from '../actions/documents'
import {
  setMutate,
  addProjectMember,
  addProjectScreenshot,
  addProjectFile,
  removeProjectMember,
  removeProjectScreenshot,
  removeProjectFile,
  clearProjectMembers,
  clearProjectScreenshots,
  clearProjectFiles
} from '../actions/root'
import { setModal } from '../actions/modal'
import { setDrawer } from '../actions/drawer'
import { setItem } from '../actions/snacks'
import { onUserLink, onUserFolderAdd, onUserAboutMore } from './user'
import { onFileLink } from '.'

const CreateButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;

  span {
    white-space: nowrap;
  }
`

export function onProjectLink(dispatch, props) {
  const { id, auth, liked, onAdd, onLike, owned } = props

  dispatch(
    setDrawer({
      icon: 'work',
      title: 'Проект',
      content: (
        <ProjectView
          appearance={'clear'}
          project={id}
          owned={owned}
          liked={liked}
          onLike={onLike}
          onAdd={onAdd}
          onFileLink={() => onFileLink(dispatch, { id })}
          onAboutMore={(project) => onUserAboutMore(dispatch, { project })}
          onMemberLink={(member) => onUserLink(dispatch, { id: member, auth, owned })}
          onCompanyLink={(company) => onUserLink(dispatch, { id: company, auth, owned })}
          onScreenshotClick={(_, key, screenshots) =>
            onProjectScreenshot(dispatch, {
              screenshots,
              key
            })
          }
        />
      )
    })
  )
}

export function onProjectCreate(dispatch, props) {
  const {
    companies,
    categories,
    statuses,
    canEditStatus,
    mutation,
    query,
    onCompanyInputChange,
    isPurpose
  } = props

  dispatch(clearProjectMembers())
  dispatch(clearProjectScreenshots())
  dispatch(clearProjectFiles())

  dispatch(
    setDrawer({
      icon: 'work',
      title: `${isPurpose ? 'Предложение' : 'Создание'} проекта`,
      content: (
        <ProjectForm
          mutation={mutation}
          companies={companies}
          categories={categories}
          statuses={statuses}
          appearance={'clear'}
          canEditStatus={canEditStatus}
          onMemberAdd={() => onMemberAdd(dispatch, { query })}
          onScreenshotAdd={() => onScreenshotAdd(dispatch)}
          onFileAdd={() => onFileAdd(dispatch)}
          onMemberRemove={(name) => dispatch(removeProjectMember(name))}
          onScreenshotRemove={(id) =>
            onSureDelete(dispatch, {
              id,
              text: 'Вы действительно хотите удалить изображение?',
              removeAction: removeProjectScreenshot
            })
          }
          onFileRemove={(id) =>
            onSureDelete(dispatch, {
              id,
              text: 'Вы действительно хотите удалить файл?',
              removeAction: removeProjectFile
            })
          }
          onCompanyInputChange={onCompanyInputChange}
          onSubmit={async (form, action) => {
            try {
              const members = form.members.map((member) => member.value.email)
              const files = form.files.map((file) => file.file)
              const fileSizes = form.files.map((file) => file.size)
              const screenshots = form.screenshots.map((screenshot) => screenshot.file)
              const screenshotSizes = form.screenshots.map((screenshot) => screenshot.size)

              const projects = await action({
                variables: {
                  input: {
                    title: form.title,
                    body: form.body,
                    characteristics: (form.characteristics || []).map((characteristic) => ({
                      name: characteristic.name,
                      value: characteristic.value,
                      isVisualize: characteristic.isVisualize
                    })),
                    description: form.description,
                    preview: form.preview?.file,
                    company: form.company?.value?.email,
                    previewSize: form.preview?.file?.size,
                    members: members.length > 0 ? members : [],
                    files: files.length > 0 ? files : [],
                    fileSizes: fileSizes.length > 0 ? fileSizes : [],
                    screenshots: screenshots.length > 0 ? screenshots : [],
                    screenshotSizes: screenshotSizes.length > 0 ? screenshotSizes : [],
                    presentation: form.presentation,
                    category: form.category?.value,
                    status: form.status?.value
                  }
                }
              })
              dispatch(setDocuments(projects.data.createProject))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Проект успешно создан'
                })
              )
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось создать проект'
                })
              )
            } finally {
              dispatch(setDrawer(null))
              dispatch(clearProjectMembers())
              dispatch(clearProjectScreenshots())
              dispatch(clearProjectFiles())
            }
          }}
          isPurpose={isPurpose}
        />
      )
    })
  )
}

export function onProjectEdit(dispatch, props) {
  const { id, auth, companies, categories, statuses, canEditStatus, mutation, query } = props

  dispatch(
    setDrawer({
      icon: 'work',
      title: 'Редактирование проекта',
      content: (
        <ProjectForm
          project={id}
          mutation={mutation}
          companies={companies}
          categories={categories}
          statuses={statuses}
          appearance={'clear'}
          canEditStatus={canEditStatus}
          onMemberAdd={() => onMemberAdd(dispatch, { query })}
          onScreenshotAdd={() => onScreenshotAdd(dispatch)}
          onFileAdd={() => onFileAdd(dispatch)}
          onMemberRemove={(name) => dispatch(removeProjectMember(name))}
          onScreenshotRemove={(id) =>
            onSureDelete(dispatch, {
              id,
              text: 'Вы действительно хотите удалить изображение?',
              removeAction: removeProjectScreenshot
            })
          }
          onFileRemove={(id) =>
            onSureDelete(dispatch, {
              id,
              text: 'Вы действительно хотите удалить файл?',
              removeAction: removeProjectFile
            })
          }
          onSubmit={async (form, action) => {
            try {
              const members = form.members.map((member) => member.email || member.value?.email)
              const files = form.files
                .filter((screenshot) => !screenshot.file?.id)
                .map((file) => (file.file?.type ? file.file : null))
              const screenshots = form.screenshots
                .filter((screenshot) => !screenshot.file?.id)
                .map((screenshot) => (screenshot.file?.type ? screenshot.file : null))
              const fileSizes = form.files.map((file) => file.size)
              const screenshotSizes = form.screenshots.map((screenshot) => screenshot.size)

              const projects = await action({
                variables: {
                  id,
                  input: {
                    title: form.title,
                    body: form.body,
                    characteristics: (form.characteristics || []).map((characteristic) => ({
                      name: characteristic.name,
                      value: characteristic.value,
                      isVisualize: characteristic.isVisualize
                    })),
                    description: form.description,
                    preview: form.preview?.file,
                    company: form.company?.value?.email,
                    previewSize: form.preview?.file?.size,
                    members: members,
                    files: files,
                    fileSizes: fileSizes,
                    screenshots: screenshots,
                    screenshotSizes: screenshotSizes,
                    presentation: form.presentation,
                    category: form.category?.value,
                    status: form.status?.value
                  }
                }
              })
              dispatch(setDocuments(projects.data.updateProject))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Проект успешно отредактирован'
                })
              )
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось отредактирвоать проект'
                })
              )
            } finally {
              dispatch(setDrawer(null))
              dispatch(clearProjectMembers())
              dispatch(clearProjectScreenshots())
              dispatch(clearProjectFiles())
            }
          }}
          onCommentLink={(user) => onUserLink(dispatch, { email: user, auth })}
        />
      )
    })
  )
}

export function onProjectDelete(dispatch, props) {
  const { id, auth, project, mutation } = props

  dispatch(
    setDrawer({
      icon: 'delete',
      color: 'red',
      title: 'Удаление проекта',
      content: (
        <DeleteForm
          mutation={mutation}
          appearance={'clear'}
          onCancel={() => dispatch(setDrawer(null))}
          onSubmit={async (_, action) => {
            try {
              const projects = await action({
                variables: { id }
              })
              dispatch(setDocuments(projects.data.deleteProject))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Проект успешно удален'
                })
              )
            } catch {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось удалить проект'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}>
          <ProjectCard
            project={project}
            appearance={'clear'}
            onLink={() => onProjectLink(dispatch, { id: project.id })}
            onAdd={() => onProjectAdd(dispatch, { id: project.id })}
            onCompanyLink={(company) => onUserLink(dispatch, { id: company, auth })}
            onScreenshotClick={(_, key) =>
              onProjectScreenshot(dispatch, {
                screenshots: [project.preview, ...project.screenshots],
                key
              })
            }
          />
        </DeleteForm>
      )
    })
  )
}

export function onProjectAdd(dispatch, props) {
  const { id, folders, mutations, callback } = props

  dispatch(
    setModal([
      {
        path: '/',
        title: 'В какую папку добавить проект?',
        component: () => (
          <Column style={{ padding: '15px' }}>
            {folders && folders.length > 0 ? (
              <Grid length={'auto-fit'} percentage={'minmax(225px, 1fr)'}>
                {folders.map((folder) => {
                  const length = folder.projects.length
                  const label =
                    length === 1 ? 'проект' : length > 1 && length < 5 ? 'проекта' : 'проектов'
                  const disabled = folder.projects.find((item) => item === id)

                  return (
                    <Difinition
                      key={folder.id}
                      icon={'paper'}
                      text={folder.name}
                      label={`${length} ${label}${disabled ? ' (уже есть)' : ''}`}
                      disabled={disabled}
                      onLink={() => {
                        dispatch(
                          setMutate(mutations.addProject, { project: id, folder: folder.id })
                        )
                        dispatch(setModal(null))
                        if (callback) callback(folder)
                      }}
                      revert
                    />
                  )
                })}
              </Grid>
            ) : (
              <Alert style={{ textAlign: 'center' }} width={'100%'}>
                Папок нет
              </Alert>
            )}
            <CreateButton
              onClick={() =>
                onUserFolderAdd(dispatch, {
                  mutation: mutations.createFolder,
                  onCancel: () => onProjectAdd(dispatch, props),
                  callback: (items) =>
                    onProjectAdd(dispatch, { ...props, folders: items || folders })
                })
              }>
              <span>Новая папка</span>
              <Icon icon={'add'} stroke={'white'} />
            </CreateButton>
          </Column>
        )
      }
    ])
  )
}

export function onProjectRemove(dispatch, props) {
  const { id, folder, mutation, callback } = props

  dispatch(
    setModal([
      {
        path: '/',
        title: 'Удаление проекта из папки',
        component: () => (
          <SureDeleteForm
            text={'Вы действительно хотите удалить этот проект?'}
            mutation={mutation}
            padding={false}
            onCancel={() => dispatch(setModal(null))}
            onSubmit={async (_, action) => {
              await action({
                variables: {
                  project: id,
                  folder: folder.id
                }
              })
              dispatch(setModal(null))
              if (callback) callback()
            }}
          />
        )
      }
    ])
  )
}

export function onMemberAdd(dispatch, props) {
  const { query } = props

  dispatch(
    setModal([
      {
        path: '/',
        title: 'Добавление участника',
        component: () => (
          <AddMemberForm
            query={query}
            onSubmit={(member) => {
              dispatch(addProjectMember(member))
              dispatch(setModal(null))
            }}
          />
        )
      }
    ])
  )
}

export function onScreenshotAdd(dispatch) {
  dispatch(
    setModal([
      {
        path: '/',
        title: 'Добавление изображений',
        component: () => (
          <AddFileForm
            placeholder={'Перетащите сюда изображения'}
            submitText={'Добавить изображения'}
            onSubmit={(files) => {
              for (let file of files) {
                dispatch(addProjectScreenshot(file))
              }
              dispatch(setModal(null))
            }}
          />
        )
      }
    ])
  )
}

export function onFileAdd(dispatch) {
  dispatch(
    setModal([
      {
        path: '/',
        title: 'Добавление файлов',
        component: () => (
          <AddFileForm
            accept={
              'application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*'
            }
            onSubmit={(files) => {
              for (let file of files) {
                dispatch(addProjectFile(file))
              }
              dispatch(setModal(null))
            }}
          />
        )
      }
    ])
  )
}

export function onSureDelete(dispatch, props) {
  const { id, text, removeAction } = props

  dispatch(
    setModal([
      {
        path: '/',
        title: 'Удаление',
        component: () => (
          <ContentSureDelete
            text={text}
            type={'button'}
            onCancel={() => dispatch(setModal(null))}
            onSubmit={async () => {
              dispatch(removeAction(id))
              dispatch(setModal(null))
            }}
            padding
          />
        )
      }
    ])
  )
}

export function onProjectScreenshot(dispatch, props) {
  const { key, screenshots } = props

  dispatch(
    setModal(
      screenshots.map((screenshot, index) => ({
        title: 'Изображение',
        path: `/${screenshot.id}`,
        home: screenshot.id === key,
        component: ({ jump }) => (
          <Screenshot
            index={index}
            screenshot={screenshot}
            screenshots={screenshots}
            onClick={jump}
          />
        ),
        back: false
      })),
      'l'
    )
  )
}
