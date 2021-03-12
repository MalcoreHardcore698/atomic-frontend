import React from 'react'

import RoleForm from '../../components/FormRole'
import DeleteForm from '../../components/FormDelete'
import RoleView from '../../components/RoleView'
import { setDocuments } from '../actions/documents'
import { setDrawer } from '../actions/drawer'
import { setItem } from '../actions/snacks'

export function onRoleLink(dispatch, props) {
  const { id } = props

  dispatch(
    setDrawer({
      icon: 'lock',
      title: 'Роль',
      content: <RoleView role={id} appearance={'clear'} />
    })
  )
}

export function onRoleCreate(dispatch, props) {
  const { permissions, mutation } = props

  dispatch(
    setDrawer({
      icon: 'lock',
      title: 'Создание роли',
      content: (
        <RoleForm
          mutation={mutation}
          permissions={permissions}
          appearance={'clear'}
          onSubmit={async (form, action) => {
            try {
              const roles = await action({
                variables: {
                  input: {
                    name: form.name,
                    permissions: form.permissions.map((permission) => permission.value)
                  }
                }
              })
              dispatch(setDocuments(roles.data.createRole))
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Роль успешно создана'
                })
              )
            } catch {
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось создать роль'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onRoleEdit(dispatch, props) {
  const { role, permissions, mutation } = props

  dispatch(
    setDrawer({
      icon: 'lock',
      title: 'Редактирование роли',
      content: (
        <RoleForm
          role={role}
          mutation={mutation}
          permissions={permissions}
          appearance={'clear'}
          onSubmit={async (form, action) => {
            try {
              const roles = await action({
                variables: {
                  id: role.id,
                  input: {
                    name: form.name,
                    permissions: form.permissions.map((permission) => permission.value)
                  }
                }
              })
              dispatch(setDocuments(roles.data.updateRole))
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Роль успешно отредактирована'
                })
              )
            } catch {
              dispatch(setDrawer(null))
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось отредактировать роль'
                })
              )
            }
          }}
        />
      )
    })
  )
}

export function onRoleDelete(dispatch, props) {
  const { id, mutation } = props

  dispatch(
    setDrawer({
      icon: 'delete',
      color: 'red',
      title: 'Удаление роли',
      content: (
        <DeleteForm
          mutation={mutation}
          appearance={'clear'}
          onCancel={() => dispatch(setDrawer(null))}
          onSubmit={async (_, action) => {
            try {
              const roles = await action({
                variables: { id }
              })
              dispatch(setDocuments(roles.data.deleteRole))
              dispatch(
                setItem({
                  type: 'success',
                  message: 'Роль успешно удалена'
                })
              )
            } catch {
              dispatch(
                setItem({
                  type: 'error',
                  message: 'Не удалось удалить роль'
                })
              )
            } finally {
              dispatch(setDrawer(null))
            }
          }}>
          <RoleView role={id} appearance={'clear'} />
        </DeleteForm>
      )
    })
  )
}
