import React from 'react'

import List from '../List'
import UserSuit from '../UserSuit'
import { useUser } from '../../hooks/useUser'
import { COMMON_LOAD_LIMIT, COMMON_START_OFFSET } from '../../constants'
import { INITIAL_DISPLAY_METHOD } from '../../layouts/content'
import queries from '../../graphql/queries'

export const UserList = ({
  limit,
  variables,
  startOffset,
  gridOptions,
  emptyMessage,
  initialDisplayMethod,
  withoutSearch,
  withoutMore
}) => {
  const methods = useUser()

  return (
    <List
      type={'getUsers'}
      variables={variables}
      withoutMore={withoutMore}
      gridOptions={gridOptions}
      query={queries.GET_USERS}
      emptyMessage={emptyMessage}
      withoutSearch={withoutSearch}
      limit={limit ?? COMMON_LOAD_LIMIT}
      startOffset={startOffset ?? COMMON_START_OFFSET}
      initialDisplayMethod={initialDisplayMethod ?? INITIAL_DISPLAY_METHOD}
      component={(document) => <UserSuit {...methods} user={document} />}
    />
  )
}

UserList.defaultProps = {
  emptyMessage: 'Пользователей нет'
}

export default UserList
