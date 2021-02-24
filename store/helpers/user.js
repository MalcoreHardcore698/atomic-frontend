import React from 'react'

import UserForm from '../../components/FormUser'
import CheckinForm from '../../components/FormCheckin'
import LoginForm from '../../components/FormLogin'
import RegisterForm from '../../components/FormRegister'
import ForgotEmailForm from '../../components/FormForgotEmail'
import ForgotPasswordForm from '../../components/FormForgotPassword'
import ChangePasswordForm from '../../components/FormChangePassword'
import AddUserFolderForm from '../../components/FormAddUserFolder'
import SureDeleteForm from '../../components/FormSureDelete'
import DeleteForm from '../../components/FormDelete'
import UserCard from '../../components/UserCard'
import UserView from '../../components/UserView'
import Members from '../../components/Members'

import Column from '../../atomic-ui/components/Column'
import Text from '../../atomic-ui/components/Text'

import { setStepper } from '../actions/stepper'
import { setDrawer } from '../actions/drawer'
import { setModal } from '../actions/modal'
import { setUser, updateUser, addUserFolder, removeUserFolder } from '../actions/user'
import { setDocuments } from '../actions/documents'
import { setItem } from '../actions/snacks'
import { onProjectLink, onProjectAdd, onProjectScreenshot } from './project'
import { onChat } from '.'

export function onUserCheckin(dispatch, props) {
  const { mutations } = props

  dispatch(
    setStepper({
      name: 'checkin',
      content: (
        <CheckinForm
          mutations={mutations}
          onCreate={() => onUserRegister(dispatch, props)}
          onForgot={() => onUserForgotEmail(dispatch, props)}
          onGoogleError={() => {}}
          onFacebookError={() => {}}
          onGoogleFinally={(user) => dispatch(setUser(user))}
          onFacebookFinally={(user) => dispatch(setUser(user))}
          onGoogleSubmit={async (response, action) => {
            const { accessToken } = response
            await action({ variables: { accessToken } })
          }}
          onFacebookSubmit={async (response, action) => {
            const { accessToken } = response
            await action({ variables: { accessToken } })
          }}
          onSubmit={async (form, action) => {
            try {
              const response = await action({
                variables: {
                  login: form.login
                }
              })

              if (response.data?.checkin) {
                dispatch(updateUser({ login: form.login }))
                onUserLogin(dispatch, {
                  login: form.login,
                  mutations
                })
              }
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось пройти проверку'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onUserLogin(dispatch, props) {
  const { login, mutations } = props

  dispatch(
    setStepper({
      name: 'login',
      content: (
        <LoginForm
          email={login}
          mutation={mutations.login}
          onBack={() => onUserCheckin(dispatch, { mutations })}
          onForgot={() => onUserForgotPassword(dispatch, { mutations })}
          onSubmit={async (form, action) => {
            try {
              const response = await action({
                variables: {
                  login,
                  password: form.password
                }
              })

              const user = response.data.login
              dispatch(setUser(user))
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось авторизоваться'
                })
              )
            } finally {
              dispatch(setStepper(null))
            }
          }}
        />
      )
    })
  )
}

export function onUserRegister(dispatch, props) {
  const { mutations } = props

  dispatch(
    setStepper({
      name: 'register',
      content: (
        <RegisterForm
          mutation={mutations.register}
          onLogin={() => onUserCheckin(dispatch, { mutations })}
          onSubmit={async (form, action) => {
            try {
              const response = await action({
                variables: {
                  input: {
                    name: form.name,
                    account: form?.account.value || 'INDIVIDUAL',
                    email: form.email,
                    phone: form.phone,
                    password: form.password,
                    confirmPassword: form.confirmPassword
                  }
                }
              })

              const user = response.data.register
              dispatch(setUser({ ...user, register: true }))
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось зарегистрировать пользователя'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onUserForgotEmail(dispatch, props) {
  const { mutations } = props

  dispatch(
    setStepper({
      name: 'forgotEmail',
      content: (
        <ForgotEmailForm
          mutation={mutations.forgotEmail}
          onBack={() => onUserLogin(dispatch, { mutations })}
          onSubmit={async (form, action) => {
            try {
              await action(form)
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось восстановить эл. почту'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onUserForgotPassword(dispatch, props) {
  const { mutations } = props

  dispatch(
    setStepper({
      name: 'forgotPassword',
      content: (
        <ForgotPasswordForm
          mutation={mutations.forgotPassword}
          onBack={() => onUserLogin(dispatch, { mutations })}
          onSubmit={async (form, action) => {
            try {
              await action(form)
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось восстановить пароль'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onUserChangePassword(dispatch, props) {
  const { user, mutation } = props

  dispatch(
    setModal([
      {
        path: '/',
        home: true,
        title: 'Смена пароля',
        component: () => (
          <ChangePasswordForm
            mutation={mutation}
            title={false}
            appearance={'ghost'}
            onSubmit={async (form, action) => {
              try {
                await action({
                  variables: {
                    id: user.id,
                    input: {
                      password: form.password
                    }
                  }
                })
              } catch (err) {
                dispatch(
                  setItem({
                    type: 'error',
                    message: 'Не удалось изменить пароль'
                  })
                )
              } finally {
                dispatch(setDrawer(null))
              }
            }}
          />
        )
      }
    ])
  )
}

export function onUserLink(dispatch, props) {
  const { id, auth, owned } = props

  dispatch(
    setDrawer({
      icon: 'user2',
      title: 'Пользователь',
      content: (
        <UserView
          user={id}
          owned={owned}
          appearance={'clear'}
          onChat={id !== auth && (() => onChat(dispatch, props))}
          onMembers={() => onUserMembers(dispatch, { id, auth })}
          onAboutMore={(user) => onUserAboutMore(dispatch, { user })}
          onCompanyLink={(company) => onUserLink(dispatch, { id: company.email, auth })}
          onProjectLink={(project) =>
            onProjectLink(dispatch, { id: project.id, project, auth, owned })
          }
          onProjectAdd={
            id !== auth && ((project) => onProjectAdd(dispatch, { id: project.id, project }))
          }
          onProjectCompanyLink={(company) =>
            auth !== company && onUserLink(dispatch, { id: company.email, auth, owned })
          }
          onProjectScreenshotClick={(_, key, screenshots) =>
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

export function onUserCreate(dispatch, props) {
  const { roles, canEditRole, mutation } = props

  dispatch(
    setDrawer({
      icon: 'user2',
      title: 'Создание пользователя',
      content: (
        <UserForm
          roles={roles}
          mutation={mutation}
          appearance={'clear'}
          canEditRole={canEditRole}
          onSubmit={async (form, action) => {
            try {
              const users = await action({
                variables: {
                  input: {
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    password: form.password,
                    company: form.company?.value,
                    account: form.account?.value,
                    avatar: form.avatar?.file,
                    avatarSize: form.avatar?.file?.size,
                    about: form.about,
                    gender: form.gender?.value,
                    dateOfBirth: form.dateOfBirth,
                    role: form.role?.value
                  }
                }
              })
              dispatch(setDocuments(users.data.createUser))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Пользователь успешно создан'
                })
              )
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось создать пользователя'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}
        />
      )
    })
  )
}

export function onUserClientEdit(dispatch, props) {
  const { user, mutations } = props

  dispatch(
    setDrawer({
      icon: 'user2',
      title: 'Редактирование пользователя',
      content: (
        <UserForm
          user={user}
          mutation={mutations.update}
          appearance={'clear'}
          onSubmit={async (form, action) => {
            try {
              const result = await action({
                variables: {
                  input: {
                    name: form?.name,
                    account: form?.account?.value,
                    avatar: form?.avatar?.file,
                    avatarSize: form?.avatar?.file?.size,
                    company: form?.company?.value,
                    about: form?.about,
                    gender: form?.gender?.value,
                    phone: form?.phone,
                    email: form?.email,
                    dateOfBirth: form?.dateOfBirth,
                    role: form?.role?.value
                  }
                }
              })

              dispatch(updateUser(result.data.updateClientUser))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Данные успешно отредактированы'
                })
              )
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось отредактировать данные'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}
          onDelete={() =>
            onUserDelete(dispatch, {
              id: user,
              mutation: mutations.del
            })
          }
          onChangePassword={() =>
            onUserChangePassword(dispatch, { mutation: mutations.changePassword })
          }
        />
      )
    })
  )
}

export function onUserEdit(dispatch, props) {
  const { user, roles, canEditAccount, canEditRole, mutations } = props

  dispatch(
    setDrawer({
      icon: 'user2',
      title: 'Редактирование пользователя',
      content: (
        <UserForm
          user={user}
          roles={roles}
          mutation={mutations.update}
          appearance={'clear'}
          canEditAccount={canEditAccount}
          canEditRole={canEditRole}
          onSubmit={async (form, action) => {
            try {
              const users = await action({
                variables: {
                  email: user,
                  input: {
                    name: form.name,
                    account: form.account?.value,
                    avatar: form.avatar?.file,
                    avatarSize: form.avatar?.file?.size,
                    company: form.company?.value,
                    about: form.about,
                    gender: form.gender?.value,
                    phone: form.phone,
                    email: form.email,
                    dateOfBirth: form.dateOfBirth,
                    role: form.role?.value
                  }
                }
              })

              dispatch(setDocuments(users.data.updateUser))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Пользователь успешно отредактирован'
                })
              )
            } catch (err) {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось отредактировать пользователя'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}
          onDelete={() =>
            onUserDelete(dispatch, {
              id: user,
              mutation: mutations.del
            })
          }
          onChangePassword={() =>
            onUserChangePassword(dispatch, { mutation: mutations.changePassword })
          }
        />
      )
    })
  )
}

export function onUserMembers(dispatch, props) {
  const { id, auth } = props

  dispatch(
    setDrawer({
      icon: 'user2',
      title: 'Участники компании',
      content: (
        <Members
          user={id}
          appearance={'clear'}
          onMemberLink={(member) => onUserLink(dispatch, { id: member, auth })}
        />
      )
    })
  )
}

export function onUserDelete(dispatch, props) {
  const { id, user, mutation } = props

  dispatch(
    setDrawer({
      icon: 'delete',
      color: 'red',
      title: 'Удаление пользователя',
      content: (
        <DeleteForm
          mutation={mutation}
          appearance={'clear'}
          onCancel={() => dispatch(setDrawer(null))}
          onSubmit={async (_, action) => {
            try {
              const users = await action({
                variables: { email: id }
              })
              dispatch(setDocuments(users.data.deleteUser))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Пользователь успешно удален'
                })
              )
            } catch (err) {
              console.log(err)
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось удалить пользователя'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}>
          <UserCard user={user} appearance={'clear'} />
        </DeleteForm>
      )
    })
  )
}

export function onUserAboutMore(dispatch, props) {
  const { user } = props

  dispatch(
    setModal([
      {
        path: '/',
        title: user.about ? 'О себе' : 'Описание',
        component: () => (
          <Column style={{ padding: '15px' }}>
            <Text>{user.about || user.description}</Text>
          </Column>
        )
      }
    ])
  )
}

export function onUserFolderAdd(dispatch, props) {
  const { mutation, onCancel, callback } = props

  dispatch(
    setModal([
      {
        path: '/',
        title: 'Создание папки',
        component: () => (
          <AddUserFolderForm
            title={false}
            mutation={mutation}
            onCancel={() => (onCancel ? onCancel() : dispatch(setModal(null)))}
            onSubmit={async (form, action) => {
              const response = await action({
                variables: {
                  name: form.name
                }
              })
              dispatch(addUserFolder(response.data.addUserFolder))
              dispatch(setModal(null))
              if (callback) callback()
            }}
          />
        )
      }
    ])
  )
}

export function onUserFolderDelete(dispatch, props) {
  const { id, mutation } = props

  dispatch(
    setModal([
      {
        path: '/',
        title: 'Удаление папки',
        component: () => (
          <SureDeleteForm
            mutation={mutation}
            text={'Вы действительно хотите удалить папку?'}
            onCancel={() => dispatch(setModal(null))}
            onSubmit={async (_, action) => {
              const response = await action({
                variables: { id }
              })
              dispatch(removeUserFolder(response.data.removeUserFolder))
              dispatch(setModal(null))
            }}
          />
        )
      }
    ])
  )
}
