import React from 'react'

import UserSuit from '../components/UserSuit'
import ContentLayout from '../layouts/content'
import { useUser } from '../hooks/useUser'
import { users as filterConfig } from '../components/FilterBar/config'
import { COMMON_START_OFFSET, COMMON_LOAD_LIMIT } from '../constants'
import queries from '../graphql/queries'

const TITLE = 'Авторы'

const Creators = () => {
  const methods = useUser()

  return (
    <ContentLayout
      title={TITLE}
      getType={'getUsers'}
      limit={COMMON_LOAD_LIMIT}
      filterConfig={filterConfig}
      getQuery={queries.GET_USERS}
      variables={{ role: 'USER' }}
      emptyMessage={'Пользователей нет'}
      startOffsett={COMMON_START_OFFSET}
      render={(document) => <UserSuit {...methods} user={document} />}
    />
  )
}

export default Creators
