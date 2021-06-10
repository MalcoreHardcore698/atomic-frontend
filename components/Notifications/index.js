import React, { useState, useEffect, useMemo } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import Column from '../../atomic-ui/components/Column'
import Alert from '../../atomic-ui/components/Alert'
import Notice from '../../atomic-ui/components/Notice'
import Spinner from '../../atomic-ui/components/Spinner'

import { Loader } from '../Styled'
import { useMutationEffect } from '../../hooks/useMutationEffect'
import { useUpdateEffect } from '../../hooks/useUpdateEffect'
import queries from '../../graphql/queries'
import { updateUser } from '../../store/actions/user'

export const Wrap = styled(Column)``

export const Notifications = ({ user, appearance }) => {
  const [notifications, setNotifications] = useState([])
  const dispatch = useDispatch()

  const unreadedNotificationIds = useMemo(
    () => notifications.filter((n) => n.status === 'UNREADED').map((n) => n.id),
    [notifications]
  )

  const { data, loading, error } = useQuery(queries.GET_NOTIFICATIONS, {
    variables: {
      author: user
    }
  })

  const [apply, { loading: loadingApply, error: errorApply }] = useMutationEffect(
    queries.APPLY_INVITE_USER_MEMBER,
    'applyInviteUserMember',
    setNotifications
  )

  const [reject, { loading: loadingReject, error: errorReject }] = useMutationEffect(
    queries.REJECT_INVITE_USER_MEMBER,
    'rejectInviteUserMember',
    setNotifications
  )

  const [readNotifications, { loading: loadingReadNotifications }] = useMutation(
    queries.READ_NOTIFICATIONS
  )

  const onApply = (notice) => apply({ variables: { id: notice.id, email: notice.company?.email } })

  const onReject = (notice) =>
    reject({ variables: { id: notice.id, email: notice.company?.email } })

  useUpdateEffect(data, loading, 'getNotifications', setNotifications)

  useEffect(() => {
    if (unreadedNotificationIds?.length > 0) {
      readNotifications({
        variables: {
          id: unreadedNotificationIds
        }
      }).finally(() => dispatch(updateUser({ countOfNewNotifications: 0 })))
    }
  }, [dispatch, unreadedNotificationIds, readNotifications])

  return (
    <Wrap>
      {notifications &&
      !loading &&
      !loadingApply &&
      !loadingReject &&
      !loadingReadNotifications &&
      notifications.length > 0 ? (
        notifications.map((notice) => (
          <Notice
            key={notice.id}
            {...(notice.author
              ? {
                  img: notice.author?.avatar?.path || '/images/avatar-default.png'
                }
              : {
                  icon: 'infoCircle'
                })}
            title={notice.title}
            message={notice.message}
            date={notice.createdAt}
            appearance={appearance}
            onApply={notice.type === 'INVITE' && (() => onApply(notice))}
            onReject={notice.type === 'INVITE' && (() => onReject(notice))}
          />
        ))
      ) : loading || loadingApply || loadingReject || loadingReadNotifications ? (
        <Loader>
          <Spinner />
        </Loader>
      ) : error || errorApply || errorReject ? (
        <Alert appearance={'error'} style={{ width: '100%', textAlign: 'center' }}>
          Упс! Не удалось загрузить информацию о участниках
        </Alert>
      ) : (
        <Alert style={{ textAlign: 'center' }} width={'100%'}>
          Уведомлений нет
        </Alert>
      )}
    </Wrap>
  )
}

Notifications.defaultProps = {
  appearance: 'default'
}

export default Notifications
