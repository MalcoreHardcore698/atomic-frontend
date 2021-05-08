import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import template from '../../atomic-ui/components/Table/templates/user'

import UserSuit from '../../components/UserSuit'
import ContentLayout from '../../layouts/dashboard/content'
import { setDocuments } from '../../store/actions/documents'
import { COMMON_START_OFFSET, DASHBOARD_LOAD_LIMIT } from '../../constants'
import { useUser } from '../../hooks/useUser'
import queries from '../../graphql/queries'

const TITLE = 'Пользователи'

const Users = () => {
  const { onCreate, onEdit, ...methods } = useUser({ isManage: true })
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDocuments(null))
  }, [])

  return (
    <ContentLayout
      title={TITLE}
      icon={'user2'}
      field={'email'}
      template={template}
      getType={'getUsers'}
      limit={DASHBOARD_LOAD_LIMIT}
      getQuery={queries.GET_USERS}
      startOffset={COMMON_START_OFFSET}
      deleteQuery={queries.DELETE_USER}
      emptyMessage={'Пользователей нет'}
      deleteEntityMultiText={'пользователи'}
      deleteEntitySingleText={'пользователь'}
      buttonCreateText={'Создать пользователя'}
      render={(document) => <UserSuit {...methods} user={document} withSocials={false} preview />}
      onCreate={onCreate}
      onEdit={onEdit}
    />
  )
}

export default Users
