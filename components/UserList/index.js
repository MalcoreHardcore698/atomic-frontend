import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import List from '../List'
import UserSuit from '../UserSuit'
import { useUser } from '../../hooks/useUser'
import { COMMON_LOAD_LIMIT, COMMON_START_OFFSET } from '../../constants'
import { INITIAL_DISPLAY_METHOD } from '../../layouts/content'
import queries from '../../graphql/queries'

const Document = memo(({ document }) => {
  const methods = useUser()
  return <UserSuit {...methods} user={document} />
})

export const UserList = memo(
  ({
    limit,
    variables,
    startOffset,
    gridOptions,
    emptyMessage,
    initialDisplayMethod,
    withoutSearch
  }) => {
    const search = useSelector((state) => state.root.search)
    return (
      <List
        type={'getUsers'}
        variables={variables}
        withoutMore={!search}
        gridOptions={gridOptions}
        query={queries.GET_USERS}
        emptyMessage={emptyMessage}
        withoutSearch={withoutSearch}
        limit={limit ?? COMMON_LOAD_LIMIT}
        startOffset={startOffset ?? COMMON_START_OFFSET}
        initialDisplayMethod={initialDisplayMethod ?? INITIAL_DISPLAY_METHOD}
        component={(document) => <Document document={document} />}
      />
    )
  }
)

UserList.defaultProps = {
  emptyMessage: 'Пользователей нет'
}

export default UserList
